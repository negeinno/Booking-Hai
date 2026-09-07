import random
import datetime
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from businesses.models import Business, Category, BusinessSettings
from staff.models import StaffMember
from services.models import Service
from appointments.models import Appointment
from payments.models import Payment
from reviews.models import Review
from core.tenant import set_current_tenant
from django.utils import timezone

class Command(BaseCommand):
    help = 'Loads professional demo data for v1.0.0'

    def handle(self, *args, **kwargs):
        self.stdout.write("Starting demo data generation...")

        # Create Categories
        categories = ['Salon', 'Clinic', 'Gym', 'Consultant', 'Spa', 'Tutor']
        for cat in categories:
            Category.objects.get_or_create(name=cat, slug=cat.lower())

        # Create Demo Users
        superadmin, _ = User.objects.get_or_create(username='admin', email='admin@demo.com', is_superuser=True, is_staff=True)
        if not superadmin.password: superadmin.set_password('admin123'); superadmin.save()

        owner, _ = User.objects.get_or_create(username='owner', email='owner@demo.com')
        if not owner.password: owner.set_password('demo1234'); owner.save()

        manager, _ = User.objects.get_or_create(username='manager', email='manager@demo.com')
        if not manager.password: manager.set_password('demo1234'); manager.save()

        staff_user, _ = User.objects.get_or_create(username='staff', email='staff@demo.com')
        if not staff_user.password: staff_user.set_password('demo1234'); staff_user.save()

        customer, _ = User.objects.get_or_create(username='customer', email='customer@demo.com')
        if not customer.password: customer.set_password('demo1234'); customer.save()

        # Create Businesses
        biz_data = [
            {'name': 'Elite Salon', 'cat': 'Salon', 'sub': 'elite'},
            {'name': 'FitZone Gym', 'cat': 'Gym', 'sub': 'fitzone'},
            {'name': 'Prime Dental Clinic', 'cat': 'Clinic', 'sub': 'prime'},
            {'name': 'LegalPro Consultants', 'cat': 'Consultant', 'sub': 'legalpro'},
            {'name': 'Urban Spa', 'cat': 'Spa', 'sub': 'urbanspa'},
        ]
        
        businesses = []
        for bd in biz_data:
            cat = Category.objects.get(name=bd['cat'])
            b, _ = Business.objects.get_or_create(
                name=bd['name'],
                slug=bd['sub'],
                owner=owner,
                category=cat,
                subdomain=bd['sub']
            )
            BusinessSettings.objects.get_or_create(business=b)
            businesses.append(b)

        # Customers
        customers = []
        for i in range(100):
            u, _ = User.objects.get_or_create(username=f'cust_{i}', email=f'cust{i}@demo.com')
            customers.append(u)

        from locations.models import BusinessLocation

        # Services & Staff
        for b in businesses:
            set_current_tenant(b)
            
            loc, _ = BusinessLocation.objects.get_or_create(
                business=b, 
                name=f"Main Branch {b.name}", 
                is_primary=True,
                address_line_1="123 Demo Street",
                city="Mumbai",
                state="MH",
                postal_code="400001"
            )
            
            s1, _ = Service.objects.get_or_create(business=b, name=f'Service A for {b.name}', duration=30, price=50.0)
            s2, _ = Service.objects.get_or_create(business=b, name=f'Service B for {b.name}', duration=60, price=100.0)
            
            st1, _ = StaffMember.objects.get_or_create(business=b, name=f'Staff 1 {b.name}')
            st1.services.add(s1, s2)

            # Appointments
            for i in range(20):
                Appointment.objects.create(
                    business=b,
                    location=loc,
                    service=random.choice([s1, s2]),
                    staff=st1,
                    customer=random.choice(customers),
                    date=timezone.now().date() + datetime.timedelta(days=random.randint(1, 30)),
                    start_time=datetime.time(10, 0),
                    end_time=datetime.time(11, 0),
                    status=random.choice(['pending', 'confirmed', 'completed']),
                    price=50.0
                )

        self.stdout.write(self.style.SUCCESS("Successfully generated demo data!"))
