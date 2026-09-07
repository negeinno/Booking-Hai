from django.db import models
from django.contrib.auth.models import User
from core.models import TenantModel

class Notification(TenantModel):
    STATUS_CHOICES = (
        ('unread', 'Unread'),
        ('read', 'Read'),
        ('archived', 'Archived'),
    )
    PRIORITY_CHOICES = (
        ('low', 'Low'),
        ('normal', 'Normal'),
        ('high', 'High'),
        ('urgent', 'Urgent'),
    )
    TYPE_CHOICES = (
        ('booking_created', 'Booking Created'),
        ('booking_confirmed', 'Booking Confirmed'),
        ('booking_cancelled', 'Booking Cancelled'),
        ('booking_rescheduled', 'Booking Rescheduled'),
        ('payment_success', 'Payment Success'),
        ('payment_failure', 'Payment Failure'),
        ('review_received', 'Review Received'),
        ('staff_invitation', 'Staff Invitation'),
        ('subscription_alert', 'Subscription Alert'),
        ('system_announcement', 'System Announcement'),
        ('other', 'Other'),
    )
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifications', null=True, blank=True)
    title = models.CharField(max_length=255)
    message = models.TextField()
    notification_type = models.CharField(max_length=50, choices=TYPE_CHOICES, default='other')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='unread')
    priority = models.CharField(max_length=20, choices=PRIORITY_CHOICES, default='normal')
    link = models.URLField(blank=True, null=True, help_text="Optional link to related resource")
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.title} ({self.get_status_display()})"

class EmailTemplate(TenantModel):
    name = models.CharField(max_length=100)
    subject = models.CharField(max_length=255)
    body_html = models.TextField(help_text="HTML content with {{ context_variables }}")
    body_text = models.TextField(help_text="Plain text content")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

