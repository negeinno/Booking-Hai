from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField(blank=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

class Business(models.Model):
    STATUS_CHOICES = (
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    )

    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='businesses')
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='businesses')
    
    # Basic Details
    name = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(unique=True, blank=True)
    short_description = models.CharField(max_length=255)
    about = models.TextField(blank=True)
    
    # Branding
    logo = models.ImageField(upload_to='businesses/logos/', blank=True, null=True)
    cover_image = models.ImageField(upload_to='businesses/covers/', blank=True, null=True)
    
    # Contact Details
    phone = models.CharField(max_length=20, blank=True)
    email = models.EmailField(blank=True)
    website = models.URLField(blank=True)
    
    # Timezone (can be business-wide or per-location, kept here for simplicity)
    timezone = models.CharField(max_length=50, default='UTC')
    
    # Trust & Reputation
    is_verified = models.BooleanField(default=False)
    average_rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)
    total_reviews = models.PositiveIntegerField(default=0)
    
    # Metadata
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Businesses"

    def __str__(self):
        return self.name

class BusinessSettings(models.Model):
    business = models.OneToOneField(Business, on_delete=models.CASCADE, related_name='settings')
    appointment_duration_default = models.PositiveIntegerField(default=30, help_text="Default duration in minutes")
    booking_buffer_time = models.PositiveIntegerField(default=15, help_text="Buffer time between appointments in minutes")
    max_advance_booking_days = models.PositiveIntegerField(default=60, help_text="How many days in advance can customers book?")
    min_notice_time = models.PositiveIntegerField(default=24, help_text="Minimum hours notice required for new bookings")
    currency = models.CharField(max_length=10, default='USD')
    language = models.CharField(max_length=20, default='en')

    def __str__(self):
        return f"{self.business.name} Settings"

class WorkingDay(models.Model):
    DAYS_OF_WEEK = (
        (0, 'Monday'), (1, 'Tuesday'), (2, 'Wednesday'),
        (3, 'Thursday'), (4, 'Friday'), (5, 'Saturday'), (6, 'Sunday')
    )
    location = models.ForeignKey('locations.BusinessLocation', on_delete=models.CASCADE, related_name='working_days')
    day_of_week = models.IntegerField(choices=DAYS_OF_WEEK)
    open_time = models.TimeField(null=True, blank=True)
    close_time = models.TimeField(null=True, blank=True)
    is_closed = models.BooleanField(default=False)

    class Meta:
        unique_together = ('location', 'day_of_week')
        ordering = ['day_of_week']

    def __str__(self):
        return f"{self.location.name} - {self.get_day_of_week_display()}"

class BreakTime(models.Model):
    working_day = models.ForeignKey(WorkingDay, on_delete=models.CASCADE, related_name='breaks')
    name = models.CharField(max_length=100, default="Lunch Break")
    start_time = models.TimeField()
    end_time = models.TimeField()

    def __str__(self):
        return f"{self.name} on {self.working_day}"

class SpecialDay(models.Model):
    location = models.ForeignKey('locations.BusinessLocation', on_delete=models.CASCADE, related_name='special_days')
    date = models.DateField()
    reason = models.CharField(max_length=200, help_text="e.g. Public Holiday, Emergency Closure")
    is_closed = models.BooleanField(default=True)
    open_time = models.TimeField(null=True, blank=True)
    close_time = models.TimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.date} - {self.location.name}"
