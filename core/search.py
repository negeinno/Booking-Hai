from django.db.models import Q
from appointments.models import Appointment
from businesses.models import Business
from support.models import Ticket

class GlobalSearchService:
    @staticmethod
    def search(query, business=None):
        """
        Perform a global search across various models.
        If a business is provided, it scopes the search to that business.
        """
        results = {
            'appointments': [],
            'businesses': [],
            'tickets': []
        }
        
        if not query:
            return results
            
        # Search Appointments
        app_qs = Appointment.objects.all() if business else Appointment.all_objects.all()
        if business:
            app_qs = app_qs.filter(business=business)
            
        app_results = app_qs.filter(
            Q(booking_id__icontains=query) |
            Q(guest_name__icontains=query) |
            Q(guest_email__icontains=query)
        )[:10]
        results['appointments'] = list(app_results)
        
        # Search Businesses (Global, usually for superadmins or customers)
        if not business:
            bus_results = Business.objects.filter(
                Q(name__icontains=query) |
                Q(slug__icontains=query) |
                Q(short_description__icontains=query)
            )[:10]
            results['businesses'] = list(bus_results)
            
        # Search Tickets
        ticket_qs = Ticket.objects.all() if business else Ticket.all_objects.all()
        if business:
            ticket_qs = ticket_qs.filter(business=business)
            
        ticket_results = ticket_qs.filter(
            Q(subject__icontains=query) |
            Q(description__icontains=query)
        )[:10]
        results['tickets'] = list(ticket_results)
        
        return results
