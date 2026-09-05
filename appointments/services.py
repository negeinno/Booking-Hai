import datetime
from django.db.models import Q
from businesses.models import WorkingDay, BreakTime, SpecialDay, BusinessSettings
from appointments.models import Appointment, BlockedTime

class AvailabilityEngine:
    def __init__(self, location, service, staff=None, date=None):
        self.location = location
        self.service = service
        self.staff = staff
        self.date = date
        self.settings = getattr(location.business, 'settings', None)

    def get_available_slots(self):
        if not self.date:
            return []

        # 1. Check if closed by Special Day (Holidays/Emergency)
        if SpecialDay.objects.filter(location=self.location, date=self.date, is_closed=True).exists():
            return []

        # 2. Get standard working day hours
        day_of_week = self.date.weekday()
        try:
            working_day = WorkingDay.objects.get(location=self.location, day_of_week=day_of_week)
            if working_day.is_closed:
                return []
        except WorkingDay.DoesNotExist:
            return []
            
        open_time = working_day.open_time
        close_time = working_day.close_time
        if not open_time or not close_time:
            return []

        # Convert to datetime for manipulation
        current_dt = datetime.datetime.combine(self.date, open_time)
        end_dt = datetime.datetime.combine(self.date, close_time)

        # 3. Get Breaks
        breaks = BreakTime.objects.filter(working_day=working_day)
        break_intervals = [(datetime.datetime.combine(self.date, b.start_time), 
                            datetime.datetime.combine(self.date, b.end_time)) for b in breaks]

        # 4. Get Existing Appointments and Blocked Times
        # We only consider appointments that are not cancelled or rejected
        appointments = Appointment.objects.filter(
            location=self.location,
            date=self.date
        ).exclude(status__in=['cancelled', 'rejected'])

        if self.staff:
            appointments = appointments.filter(staff=self.staff)
            
        booked_intervals = [(datetime.datetime.combine(self.date, a.start_time),
                             datetime.datetime.combine(self.date, a.end_time)) for a in appointments]

        # Get blocked times
        blocked = BlockedTime.objects.filter(location=self.location, date=self.date)
        if self.staff:
            blocked = blocked.filter(Q(staff=self.staff) | Q(staff__isnull=True))
        else:
            blocked = blocked.filter(staff__isnull=True)
            
        for b in blocked:
            booked_intervals.append((
                datetime.datetime.combine(self.date, b.start_time),
                datetime.datetime.combine(self.date, b.end_time)
            ))

        # 5. Generate Slots
        duration = datetime.timedelta(minutes=self.service.duration)
        buffer = datetime.timedelta(minutes=self.settings.booking_buffer_time if self.settings else 0)
        
        available_slots = []
        now = datetime.datetime.now()

        while current_dt + duration <= end_dt:
            slot_end = current_dt + duration
            
            # Skip if slot is in the past
            if current_dt < now:
                current_dt += duration + buffer
                continue
                
            # Check overlap with breaks
            is_valid = True
            for b_start, b_end in break_intervals:
                if (current_dt < b_end and slot_end > b_start):
                    is_valid = False
                    break
                    
            # Check overlap with bookings/blocks
            if is_valid:
                for a_start, a_end in booked_intervals:
                    if (current_dt < a_end and slot_end > a_start):
                        is_valid = False
                        break

            if is_valid:
                available_slots.append(current_dt.time())
                
            # Move to next slot considering buffer
            current_dt += duration + buffer

        return available_slots
