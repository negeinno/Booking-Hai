from django.db import models
from businesses.models import Business

class AutomationRule(models.Model):
    TRIGGER_CHOICES = (
        ('appt_confirmed', 'Appointment Confirmed'),
        ('appt_cancelled', 'Appointment Cancelled'),
        ('appt_missed', 'Appointment Missed'),
        ('24h_before', '24 Hours Before Appointment'),
    )
    ACTION_CHOICES = (
        ('send_email', 'Send Email'),
        ('notify_owner', 'Notify Owner'),
        ('suggest_reschedule', 'Suggest Reschedule'),
    )
    business = models.ForeignKey(Business, on_delete=models.CASCADE, related_name='automations')
    trigger_event = models.CharField(max_length=50, choices=TRIGGER_CHOICES)
    action_type = models.CharField(max_length=50, choices=ACTION_CHOICES)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.business.name}: {self.trigger_event} -> {self.action_type}"
