from django.db import models
from django.contrib.auth.models import User
from core.models import TenantModel
import uuid

class ExportJob(TenantModel):
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('processing', 'Processing'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
    )
    FORMAT_CHOICES = (
        ('csv', 'CSV'),
        ('excel', 'Excel'),
        ('pdf', 'PDF'),
    )
    ENTITY_CHOICES = (
        ('appointments', 'Appointments'),
        ('customers', 'Customers'),
        ('payments', 'Payments'),
        ('reviews', 'Reviews'),
        ('analytics', 'Analytics'),
    )
    
    job_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    requested_by = models.ForeignKey(User, on_delete=models.CASCADE)
    entity = models.CharField(max_length=50, choices=ENTITY_CHOICES)
    format = models.CharField(max_length=10, choices=FORMAT_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    file_url = models.URLField(blank=True, null=True)
    error_message = models.TextField(blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    completed_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Export {self.entity} ({self.format}) - {self.get_status_display()}"

class FileAsset(TenantModel):
    ASSET_TYPE_CHOICES = (
        ('document', 'Document'),
        ('invoice', 'Invoice'),
        ('image', 'Image'),
        ('export', 'Export'),
        ('other', 'Other'),
    )
    
    file = models.FileField(upload_to='business_assets/')
    original_filename = models.CharField(max_length=255)
    asset_type = models.CharField(max_length=20, choices=ASSET_TYPE_CHOICES, default='other')
    file_size = models.PositiveIntegerField(help_text="File size in bytes")
    mime_type = models.CharField(max_length=100)
    uploaded_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.original_filename
