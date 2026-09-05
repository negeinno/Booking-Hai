from django.db import models
from django.core.exceptions import ValidationError
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.db.models import Avg

from appointments.models import Appointment
from businesses.models import Business

class Review(models.Model):
    appointment = models.OneToOneField(Appointment, on_delete=models.CASCADE, related_name='review')
    business = models.ForeignKey(Business, on_delete=models.CASCADE, related_name='reviews')
    rating = models.PositiveSmallIntegerField(choices=[(i, str(i)) for i in range(1, 6)])
    title = models.CharField(max_length=150)
    body = models.TextField()
    is_anonymous = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def clean(self):
        if self.appointment.status != 'completed':
            raise ValidationError("Reviews can only be left for completed appointments.")
        super().clean()

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.rating} Stars for {self.business.name}"

class ReviewReply(models.Model):
    review = models.OneToOneField(Review, on_delete=models.CASCADE, related_name='reply')
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Reply to {self.review}"

# Signals to update business average rating
def update_business_rating(business):
    stats = Review.objects.filter(business=business).aggregate(
        avg_rating=Avg('rating'),
        count=models.Count('id')
    )
    business.average_rating = stats['avg_rating'] or 0.00
    business.total_reviews = stats['count']
    business.save(update_fields=['average_rating', 'total_reviews'])

@receiver(post_save, sender=Review)
def review_saved(sender, instance, **kwargs):
    update_business_rating(instance.business)

@receiver(post_delete, sender=Review)
def review_deleted(sender, instance, **kwargs):
    update_business_rating(instance.business)
