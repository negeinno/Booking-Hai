from django import forms
from .models import StaffMember

class StaffForm(forms.ModelForm):
    class Meta:
        model = StaffMember
        fields = ['name', 'profile_photo', 'phone', 'email', 'position', 'bio', 'is_active', 'services']
        widgets = {
            'services': forms.CheckboxSelectMultiple(),
        }

    def __init__(self, *args, **kwargs):
        business = kwargs.pop('business', None)
        super().__init__(*args, **kwargs)
        if business:
            self.fields['services'].queryset = business.services.all()
