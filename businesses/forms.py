from django import forms
from .models import Business

class BusinessBasicForm(forms.ModelForm):
    class Meta:
        model = Business
        fields = ['name', 'category', 'short_description', 'about']
        widgets = {
            'short_description': forms.TextInput(attrs={'placeholder': 'e.g. Premium Hair Salon in Downtown'}),
            'about': forms.Textarea(attrs={'rows': 4, 'placeholder': 'Tell customers about your services and expertise...'}),
        }

class BusinessContactForm(forms.ModelForm):
    class Meta:
        model = Business
        fields = ['phone', 'email', 'website', 'timezone']

class BusinessBrandingForm(forms.ModelForm):
    class Meta:
        model = Business
        fields = ['logo', 'cover_image']
