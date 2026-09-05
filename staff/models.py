from django.db import models
from businesses.models import Business
from services.models import Service

class StaffMember(models.Model):
    business = models.ForeignKey(Business, on_delete=models.CASCADE, related_name='staff_members')
    name = models.CharField(max_length=200)
    profile_photo = models.ImageField(upload_to='staff/', blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True)
    email = models.EmailField(blank=True)
    position = models.CharField(max_length=100, blank=True, help_text="e.g. Senior Hair Stylist, Head Trainer")
    bio = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)
    
    locations = models.ManyToManyField('locations.BusinessLocation', related_name='staff_members', blank=True)
    
    # One staff can do many services, one service can be done by many staff
    services = models.ManyToManyField(Service, blank=True, related_name='staff')

    def __str__(self):
        return self.name
