from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from businesses.models import Business, Category
from locations.models import BusinessLocation
import random

class Command(BaseCommand):
    help = 'Seeds the database with 10 demo shops for user booking'

    def handle(self, *args, **kwargs):
        self.stdout.write('Seeding demo shops...')
        
        # Create a dummy owner
        owner, _ = User.objects.get_or_create(username='demo_owner', email='owner@demo.com')
        if not owner.password:
            owner.set_password('password123')
            owner.save()
            
        categories = ['Salon', 'Spa', 'Clinic', 'Gym', 'Consultant']
        cat_objs = []
        for c in categories:
            obj, _ = Category.objects.get_or_create(name=c, slug=c.lower())
            cat_objs.append(obj)
            
        cities = ['Delhi', 'Mumbai', 'Bangalore', 'Pune', 'Hyderabad']
        
        shop_names = [
            'Glow Up Salon', 'Relax Spa', 'City Care Clinic', 'Iron Core Gym', 'Tax Pros',
            'Style Studio', 'Zen Massage', 'Smile Dental', 'Fit Factory', 'Legal Experts'
        ]
        
        for i, name in enumerate(shop_names):
            b, created = Business.objects.get_or_create(
                name=name,
                defaults={
                    'owner': owner,
                    'category': random.choice(cat_objs),
                    'short_description': f'Best {name} in town!',
                    'is_verified': True,
                    'average_rating': round(random.uniform(3.5, 5.0), 1),
                    'total_reviews': random.randint(10, 500)
                }
            )
            
            if created:
                BusinessLocation.objects.create(
                    business=b,
                    name='Main Branch',
                    city=random.choice(cities),
                    address_line_1=f'{random.randint(10, 99)} Main St',
                    is_primary=True
                )
                
        self.stdout.write(self.style.SUCCESS('Successfully seeded 10 demo shops!'))
