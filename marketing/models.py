from django.db import models
from businesses.models import Business
import string, random

def generate_code():
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))

class Coupon(models.Model):
    business = models.ForeignKey(Business, on_delete=models.CASCADE, related_name='coupons')
    code = models.CharField(max_length=20, default=generate_code, unique=True)
    discount_percent = models.PositiveIntegerField(default=10)
    valid_until = models.DateTimeField(null=True, blank=True)
    max_uses = models.PositiveIntegerField(default=100)
    times_used = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.code} - {self.discount_percent}% off"
