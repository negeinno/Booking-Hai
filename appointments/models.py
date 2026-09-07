from django.db import models
from django.contrib.auth.models import User
import uuid
from core.models import TenantManager

class Appointment(models.Model):
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
        ('rejected', 'Rejected'),
        ('no_show', 'No Show'),
        ('rescheduled', 'Rescheduled'),
    )

    # Identifiers
    booking_id = models.CharField(max_length=50, unique=True, editable=False)
    
    # Relations
    business = models.ForeignKey('businesses.Business', on_delete=models.CASCADE, related_name='appointments')
    location = models.ForeignKey('locations.BusinessLocation', on_delete=models.CASCADE, related_name='appointments')
    service = models.ForeignKey('services.Service', on_delete=models.CASCADE, related_name='appointments')
    staff = models.ForeignKey('staff.StaffMember', on_delete=models.SET_NULL, null=True, blank=True, related_name='appointments')
    
    # Customer Info
    customer = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='appointments')
    guest_name = models.CharField(max_length=200, blank=True)
    guest_email = models.EmailField(blank=True)
    guest_phone = models.CharField(max_length=20, blank=True)
    
    # Timing
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    
    # Details
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    notes = models.TextField(blank=True, help_text="Customer notes")
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = TenantManager()
    all_objects = models.Manager()

    class Meta:
        ordering = ['-date', '-start_time']
        indexes = [
            models.Index(fields=['date', 'start_time']),
            models.Index(fields=['status']),
            models.Index(fields=['booking_id']),
        ]

    def __str__(self):
        return f"{self.booking_id} - {self.service.name} on {self.date}"

    def save(self, *args, **kwargs):
        if not self.booking_id:
            # Generate BH-YYYY-XXXXXX
            import datetime
            year = datetime.datetime.now().year
            unique_part = str(uuid.uuid4().int)[:6]
            self.booking_id = f"BH-{year}-{unique_part}"
        super().save(*args, **kwargs)

class BlockedTime(models.Model):
    location = models.ForeignKey('locations.BusinessLocation', on_delete=models.CASCADE, related_name='blocked_times')
    staff = models.ForeignKey('staff.StaffMember', on_delete=models.CASCADE, null=True, blank=True, related_name='blocked_times')
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    reason = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return f"Blocked {self.date} {self.start_time}-{self.end_time}"

class AppointmentReminder(models.Model):
    TYPE_CHOICES = (
        ('email', 'Email'),
        ('sms', 'SMS'),
    )
    appointment = models.ForeignKey(Appointment, on_delete=models.CASCADE, related_name='reminders')
    reminder_type = models.CharField(max_length=10, choices=TYPE_CHOICES, default='email')
    scheduled_time = models.DateTimeField()
    is_sent = models.BooleanField(default=False)

    def __str__(self):
        return f"Reminder for {self.appointment.booking_id}"
