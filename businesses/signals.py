from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.utils.text import slugify
from .models import Category, Business

@receiver(pre_save, sender=Category)
def generate_category_slug(sender, instance, **kwargs):
    if not instance.slug:
        instance.slug = slugify(instance.name)

@receiver(pre_save, sender=Business)
def generate_business_slug(sender, instance, **kwargs):
    if not instance.slug:
        original_slug = slugify(instance.name)
        slug = original_slug
        counter = 1
        while Business.objects.filter(slug=slug).exists():
            slug = f"{original_slug}-{counter}"
            counter += 1
        instance.slug = slug

from django.db.models.signals import post_save
from .models import BusinessSettings, WorkingDay
import datetime

@receiver(post_save, sender=Business)
def create_business_defaults(sender, instance, created, **kwargs):
    if created:
        # Create default settings
        BusinessSettings.objects.create(business=instance)
        
        # Create primary location
        from locations.models import BusinessLocation
        primary_loc = BusinessLocation.objects.create(
            business=instance,
            name="Main Branch",
            is_primary=True,
            city="Add your city here",
            country="Add your country here"
        )
        
        # Create default working days (Mon-Fri 9-5, Sat-Sun closed) for the primary location
        for i in range(7):
            if i < 5: # Mon-Fri
                WorkingDay.objects.create(
                    location=primary_loc, 
                    day_of_week=i, 
                    open_time=datetime.time(9, 0), 
                    close_time=datetime.time(17, 0)
                )
            else: # Weekend
                WorkingDay.objects.create(
                    location=primary_loc, 
                    day_of_week=i, 
                    is_closed=True
                )
