from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile, EmailVerificationToken, PasswordResetToken

class UserSerializer(serializers.ModelSerializer):
    role = serializers.SerializerMethodField()
    
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'role')
        
    def get_role(self, obj):
        try:
            return obj.profile.role
        except Exception:
            return 'customer'

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    role = serializers.ChoiceField(choices=['customer', 'business_owner'], write_only=True, required=False, default='customer')

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'first_name', 'last_name', 'role')

    def create(self, validated_data):
        role = validated_data.pop('role', 'customer')
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', '')[:30],
            last_name=validated_data.get('last_name', '')[:30]
        )
        # Update the role that was automatically created by signals (if any), or create it
        profile, created = Profile.objects.get_or_create(user=user)
        profile.role = role
        profile.save()
        return user
