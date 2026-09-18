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
from django.utils import timezone
from datetime import timedelta
from .models import EmailVerificationToken, PasswordResetToken, OTPVerification
from .api_serializers import RegisterSerializer, UserSerializer

resend.api_key = os.environ.get('RESEND_API_KEY')

def send_otp_email(email, otp_code):
    try:
        if resend.api_key:
            from_email = os.environ.get('EMAIL_FROM', 'Booking Hai <onboarding@resend.dev>')
            response = resend.Emails.send({
                "from": from_email,
                "to": [email],
                "subject": "Your Booking Hai Verification Code",
                "html": f"<h2>Booking Hai</h2><p>Your verification code is: <strong>{otp_code}</strong></p><p>This code will expire in 10 minutes.</p>"
            })
            print(f"OTP email sent to {email}: {response}")
        else:
            print(f"WARNING: RESEND_API_KEY is not set. OTP code for {email} is {otp_code}")
    except Exception as e:
        print(f"Failed to send OTP to {email}:", e)

class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            otp_code = ''.join(random.choices(string.digits, k=6))
            OTPVerification.objects.create(user=user, code=otp_code)
            send_otp_email(user.email, otp_code)
            refresh = RefreshToken.for_user(user)
            return Response({
                'user': UserSerializer(user).data,
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'message': 'OTP sent to email.',
                'requires_verification': True
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VerifyOTPView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        otp_code = request.data.get('otp')
        try:
            otp_record = OTPVerification.objects.get(user=request.user)
            if timezone.now() > otp_record.expires_at:
                return Response({'error': 'OTP has expired.'}, status=status.HTTP_400_BAD_REQUEST)
            if otp_record.attempts >= 5:
                return Response({'error': 'Maximum attempts reached. Please request a new OTP.'}, status=status.HTTP_400_BAD_REQUEST)

            if otp_record.code == otp_code:
                profile = request.user.profile
                profile.is_email_verified = True
                profile.save()
                otp_record.delete()
                return Response({'message': 'Email verified successfully.'})
            else:
                otp_record.attempts += 1
                otp_record.save()
                return Response({'error': 'Invalid OTP'}, status=status.HTTP_400_BAD_REQUEST)
        except OTPVerification.DoesNotExist:
            # Maybe already verified
            if request.user.profile.is_email_verified:
                 return Response({'message': 'Email already verified.'})
            return Response({'error': 'No OTP found for this user.'}, status=status.HTTP_400_BAD_REQUEST)

class ResendOTPView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        if request.user.profile.is_email_verified:
            return Response({'error': 'User is already verified.'}, status=status.HTTP_400_BAD_REQUEST)
            
        otp_record, created = OTPVerification.objects.get_or_create(user=request.user)
        
        # Rate limit to 1 per minute
        if not created and otp_record.last_sent_at and timezone.now() < otp_record.last_sent_at + timedelta(minutes=1):
            return Response({'error': 'Please wait before requesting another OTP.'}, status=status.HTTP_429_TOO_MANY_REQUESTS)
            
        otp_code = ''.join(random.choices(string.digits, k=6))
        otp_record.code = otp_code
        otp_record.expires_at = timezone.now() + timedelta(minutes=10)
        otp_record.attempts = 0
        otp_record.last_sent_at = timezone.now()
        otp_record.save()
        
        send_otp_email(request.user.email, otp_code)
        
        return Response({'message': 'OTP resent successfully.'})

class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if not user:
            try:
                user_obj = User.objects.get(email=username)
                user = authenticate(username=user_obj.username, password=password)
            except User.DoesNotExist:
                pass

        if user:
            if not user.profile.is_email_verified:
                refresh = RefreshToken.for_user(user)
                return Response({
                    'error': 'Email not verified',
                    'requires_verification': True,
                    'user': UserSerializer(user).data,
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                }, status=status.HTTP_403_FORBIDDEN)
                
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
