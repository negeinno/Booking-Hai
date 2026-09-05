from django.db import models
from django.contrib.auth.models import User
from businesses.models import Business

class BusinessCustomer(models.Model):
    TAG_CHOICES = (
        ('vip', 'VIP'),
        ('regular', 'Regular'),
        ('new', 'New Customer'),
        ('blocked', 'Blocked'),
        ('high_value', 'High Value'),
        ('returning', 'Returning'),
    )

    business = models.ForeignKey(Business, on_delete=models.CASCADE, related_name='customers')
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    
    # Redundant fields to support guests or snapshot data
    name = models.CharField(max_length=200)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=20, blank=True)
    
    # CRM Data
    tag = models.CharField(max_length=20, choices=TAG_CHOICES, default='new')
    private_notes = models.TextField(blank=True, help_text="Only visible to business owners")
    
    created_at = models.DateTimeField(auto_now_add=True)
    last_visit = models.DateTimeField(null=True, blank=True)
    
    class Meta:
        unique_together = ('business', 'email') # Prevent duplicate profiles per business
        ordering = ['-last_visit', 'name']

    def __str__(self):
        return f"{self.name} - {self.business.name}"

class BusinessActivity(models.Model):
    business = models.ForeignKey(Business, on_delete=models.CASCADE, related_name='activities')
    activity_type = models.CharField(max_length=50) # e.g. 'appointment_booked', 'staff_added'
    description = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-timestamp']
        verbose_name_plural = "Business Activities"

class BusinessNotification(models.Model):
    business = models.ForeignKey(Business, on_delete=models.CASCADE, related_name='notifications')
    title = models.CharField(max_length=150)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']
