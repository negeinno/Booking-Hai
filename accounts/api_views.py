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
from django.conf import settings
from .models import EmailVerificationToken, PasswordResetToken, OTPVerification
from .api_serializers import RegisterSerializer, UserSerializer

resend.api_key = os.environ.get('RESEND_API_KEY')

def send_otp_email(email, otp_code):
    try:
        if resend.api_key:
            from_email = os.environ.get('EMAIL_FROM', 'Booking Hai <onboarding@negeinno.in>')
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
            
            response_data = {
                'user': UserSerializer(user).data,
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'message': 'OTP sent to email.',
                'requires_verification': True
            }
            response_data['debug_otp'] = otp_code
                
            return Response(response_data, status=status.HTTP_201_CREATED)
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
            if request.user.profile.is_email_verified:
                 return Response({'message': 'Email already verified.'})
            return Response({'error': 'No OTP found for this user.'}, status=status.HTTP_400_BAD_REQUEST)

class ResendOTPView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        if request.user.profile.is_email_verified:
            return Response({'message': 'Email already verified.'})
            
        otp_record, created = OTPVerification.objects.get_or_create(user=request.user)
        
        if not created and otp_record.last_sent_at and (timezone.now() - otp_record.last_sent_at).total_seconds() < 60:
            return Response({'error': 'Please wait a minute before requesting a new OTP.'}, status=status.HTTP_429_TOO_MANY_REQUESTS)
            
        otp_code = ''.join(random.choices(string.digits, k=6))
        otp_record.code = otp_code
        otp_record.expires_at = timezone.now() + timedelta(minutes=10)
        otp_record.attempts = 0
        otp_record.last_sent_at = timezone.now()
        otp_record.save()
        
        send_otp_email(request.user.email, otp_code)
        
        response_data = {'message': 'New OTP sent to email.'}
        response_data['debug_otp'] = otp_code
            
        return Response(response_data)

class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        
        if user:
            if not user.profile.is_email_verified:
                return Response({'error': 'Email not verified', 'requires_verification': True}, status=status.HTTP_403_FORBIDDEN)
                
            refresh = RefreshToken.for_user(user)
            return Response({
                'user': UserSerializer(user).data,
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class ForgotPasswordView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        email = request.data.get('email')
        try:
            user = User.objects.get(email=email)
            token = PasswordResetToken.objects.create(user=user)
            # In a real app, send this link via email
            reset_link = f"{settings.FRONTEND_URL}/reset-password/{token.token}"
            print(f"Password reset link: {reset_link}") # Replace with email sending
            return Response({'message': 'Password reset link sent to email.'})
        except User.DoesNotExist:
            # Return success anyway to prevent email enumeration
            return Response({'message': 'Password reset link sent to email.'})

class ResetPasswordView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, token):
        password = request.data.get('password')
        try:
            reset_token = PasswordResetToken.objects.get(token=token)
            if reset_token.is_expired():
                return Response({'error': 'Token has expired.'}, status=status.HTTP_400_BAD_REQUEST)
                
            user = reset_token.user
            user.set_password(password)
            user.save()
            reset_token.delete()
            return Response({'message': 'Password has been reset successfully.'})
        except PasswordResetToken.DoesNotExist:
            return Response({'error': 'Invalid token.'}, status=status.HTTP_400_BAD_REQUEST)

