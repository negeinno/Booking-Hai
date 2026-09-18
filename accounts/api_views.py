from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
import random
import string
import resend
import os
from .models import EmailVerificationToken, PasswordResetToken, OTPVerification
from .api_serializers import RegisterSerializer, UserSerializer

resend.api_key = os.environ.get('RESEND_API_KEY')

class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            # token = EmailVerificationToken.objects.create(user=user)
            
            # Generate 6-digit OTP
            otp_code = ''.join(random.choices(string.digits, k=6))
            OTPVerification.objects.create(user=user, code=otp_code)

            # send email logic with Resend
            try:
                if resend.api_key:
                    resend.Emails.send({
                        "from": "Acme <onboarding@resend.dev>",
                        "to": [user.email],
                        "subject": "Your Verification Code",
                        "html": f"<p>Your verification code is: <strong>{otp_code}</strong></p>"
                    })
            except Exception as e:
                print("Failed to send OTP:", e)
                
            refresh = RefreshToken.for_user(user)
            return Response({
                'user': UserSerializer(user).data,
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'message': 'OTP sent to email.'
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VerifyOTPView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        otp_code = request.data.get('otp')
        try:
            otp_record = OTPVerification.objects.get(user=request.user)
            if otp_record.code == otp_code:
                profile = request.user.profile
                profile.is_email_verified = True
                profile.save()
                otp_record.delete()
                return Response({'message': 'Email verified successfully.'})
            else:
                return Response({'error': 'Invalid OTP'}, status=status.HTTP_400_BAD_REQUEST)
        except OTPVerification.DoesNotExist:
            return Response({'error': 'No OTP found for this user.'}, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        # Allow email as username fallback
        user = authenticate(username=username, password=password)
        if not user:
            try:
                user_obj = User.objects.get(email=username)
                user = authenticate(username=user_obj.username, password=password)
            except User.DoesNotExist:
                pass

        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'user': UserSerializer(user).data,
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class ForgotPasswordView(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        email = request.data.get('email')
        try:
            user = User.objects.get(email=email)
            token = PasswordResetToken.objects.create(user=user)
            # In production, send via resend here
            return Response({'message': 'Password reset link sent to email.'})
        except User.DoesNotExist:
            return Response({'error': 'User with this email does not exist.'}, status=400)

class ResetPasswordView(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request, token):
        new_password = request.data.get('password')
        try:
            reset_token = PasswordResetToken.objects.get(token=token)
            user = reset_token.user
            user.set_password(new_password)
            user.save()
            reset_token.delete()
            return Response({'message': 'Password reset successful.'})
        except PasswordResetToken.DoesNotExist:
            return Response({'error': 'Invalid token'}, status=400)
