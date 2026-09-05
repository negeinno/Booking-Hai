from django.db import models
from businesses.models import Business

class SubscriptionPlan(models.Model):
    name = models.CharField(max_length=50, unique=True) # Free, Starter, Professional, Enterprise
    price_monthly = models.DecimalField(max_digits=10, decimal_places=2)
    max_branches = models.IntegerField(default=1)
    max_staff = models.IntegerField(default=1)
    max_monthly_bookings = models.IntegerField(default=50)
    has_premium_features = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class BusinessSubscription(models.Model):
    business = models.OneToOneField(Business, on_delete=models.CASCADE, related_name='subscription')
    plan = models.ForeignKey(SubscriptionPlan, on_delete=models.PROTECT)
    active = models.BooleanField(default=True)
    renewal_date = models.DateField()
    current_billing_cycle_bookings = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.business.name} - {self.plan.name}"
