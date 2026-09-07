from django.db import models
from django.contrib.auth.models import User
from core.tenant import get_current_tenant

class TenantManager(models.Manager):
    """
    Custom manager that automatically filters queries to only return data
    belonging to the current tenant (Business), preventing cross-tenant data leakage.
    """
    def get_queryset(self):
        queryset = super().get_queryset()
        current_tenant = get_current_tenant()
        if current_tenant:
            return queryset.filter(business=current_tenant)
        return queryset

class TenantModel(models.Model):
    """
    Abstract base class for models that belong to a specific tenant (Business).
    It includes a foreign key to Business and uses the TenantManager.
    """
    business = models.ForeignKey('businesses.Business', on_delete=models.CASCADE, related_name="%(app_label)s_%(class)s_related")
    
    # Default manager includes tenant isolation
    objects = TenantManager()
    # Unfiltered manager for admin or scripts
    all_objects = models.Manager()

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        if not self.business_id:
            current_tenant = get_current_tenant()
            if current_tenant:
                self.business = current_tenant
        super().save(*args, **kwargs)

class AuditLog(models.Model):
    """
    Audit log for tracking actions performed by users within a business context.
    """
    business = models.ForeignKey('businesses.Business', on_delete=models.CASCADE, related_name='audit_logs', null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='audit_logs')
    action = models.CharField(max_length=255)
    target = models.CharField(max_length=255, blank=True, help_text="The entity affected, e.g., Booking #123")
    details = models.TextField(blank=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    user_agent = models.CharField(max_length=512, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
        return f"[{self.timestamp}] {self.user} - {self.action}"
