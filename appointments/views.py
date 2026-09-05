from django.http import JsonResponse
from django.views.decorators.http import require_GET
from django.shortcuts import get_object_or_404
import datetime

from locations.models import BusinessLocation
from services.models import Service
from staff.models import StaffMember
from .services import AvailabilityEngine

@require_GET
def get_available_slots(request):
    try:
        location_id = request.GET.get('location_id')
        service_id = request.GET.get('service_id')
        staff_id = request.GET.get('staff_id')
        date_str = request.GET.get('date')
        
        if not all([location_id, service_id, date_str]):
            return JsonResponse({'error': 'Missing required parameters'}, status=400)
            
        date = datetime.datetime.strptime(date_str, '%Y-%m-%d').date()
        location = get_object_or_404(BusinessLocation, id=location_id, status='active')
        service = get_object_or_404(Service, id=service_id, is_active=True, locations=location)
        
        staff = None
        if staff_id:
            staff = get_object_or_404(StaffMember, id=staff_id, is_active=True, locations=location)
            
        engine = AvailabilityEngine(location=location, service=service, staff=staff, date=date)
        slots = engine.get_available_slots()
        
        return JsonResponse({
            'date': date_str,
            'slots': [slot.strftime('%H:%M') for slot in slots]
        })
        
    except ValueError:
        return JsonResponse({'error': 'Invalid date format'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
