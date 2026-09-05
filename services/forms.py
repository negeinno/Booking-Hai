from django import forms
from .models import Service

class ServiceForm(forms.ModelForm):
    class Meta:
        model = Service
        fields = ['name', 'short_description', 'price', 'duration', 'category', 'image', 'is_active']
