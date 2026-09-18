from django.urls import path
from . import api_views

urlpatterns = [
    path('register/', api_views.RegisterView.as_view(), name='api_register'),
    path('verify-otp/', api_views.VerifyOTPView.as_view(), name='api_verify_otp'),
    path('login/', api_views.LoginView.as_view(), name='api_login'),
    path('forgot-password/', api_views.ForgotPasswordView.as_view(), name='api_forgot_password'),
    path('reset-password/<uuid:token>/', api_views.ResetPasswordView.as_view(), name='api_reset_password'),
]
