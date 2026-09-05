from django.db import models
from appointments.models import Appointment

class Payment(models.Model):
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('successful', 'Successful'),
        ('failed', 'Failed'),
        ('refunded', 'Refunded'),
    )
    METHOD_CHOICES = (
        ('online', 'Online Payment'),
        ('pay_at_business', 'Pay at Business'),
    )

    appointment = models.OneToOneField(Appointment, on_delete=models.CASCADE, related_name='payment')
    razorpay_order_id = models.CharField(max_length=100, blank=True)
    razorpay_payment_id = models.CharField(max_length=100, blank=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    method = models.CharField(max_length=20, choices=METHOD_CHOICES, default='online')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    refund_status = models.CharField(max_length=50, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Payment {self.razorpay_payment_id} - {self.status}"
