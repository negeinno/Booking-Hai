from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.db.models import Count, Sum, Q
from django.utils import timezone
import datetime

from appointments.models import Appointment
from .models import BusinessCustomer, BusinessActivity

@login_required
def dashboard_home(request):
    business = request.user.businesses.first()
    if not business:
        return redirect('businesses:setup')
        
    today = timezone.now().date()
    start_of_week = today - datetime.timedelta(days=today.weekday())
    start_of_month = today.replace(day=1)
    
    # 1. Appointment Metrics
    today_appointments = Appointment.objects.filter(business=business, date=today)
    metrics = {
        'today_total': today_appointments.count(),
        'today_completed': today_appointments.filter(status='completed').count(),
        'today_cancelled': today_appointments.filter(status='cancelled').count(),
        'pending_approval': Appointment.objects.filter(business=business, status='pending').count(),
        'upcoming': Appointment.objects.filter(business=business, date__gt=today).count(),
    }
    
    # 2. CRM Metrics
    crm_metrics = {
        'new_customers': BusinessCustomer.objects.filter(business=business, tag='new').count(),
        'returning_customers': BusinessCustomer.objects.filter(business=business, tag='returning').count(),
    }
    
    # 3. Chart Data (Placeholder structure for Chart.js)
    # E.g. Appointments per day this week
    weekly_data = []
    for i in range(7):
        day = start_of_week + datetime.timedelta(days=i)
        count = Appointment.objects.filter(business=business, date=day).count()
        weekly_data.append({'day': day.strftime('%a'), 'count': count})
        
    # 4. Activity Feed
    recent_activities = BusinessActivity.objects.filter(business=business)[:10]
    
    context = {
        'business': business,
        'metrics': metrics,
        'crm_metrics': crm_metrics,
        'weekly_data': weekly_data,
        'activities': recent_activities,
    }
    
    return render(request, 'dashboard/home.html', context)
