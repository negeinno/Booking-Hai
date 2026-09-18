from rest_framework import viewsets
from businesses.models import Business
from services.models import Service
from appointments.models import Appointment
from locations.models import BusinessLocation
from staff.models import StaffMember
from django.contrib.auth.models import User
from .serializers import *

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class BusinessViewSet(viewsets.ModelViewSet):
    queryset = Business.objects.all()
    serializer_class = BusinessSerializer

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class StaffMemberViewSet(viewsets.ModelViewSet):
    queryset = StaffMember.objects.all()
    serializer_class = StaffMemberSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class BusinessLocationViewSet(viewsets.ModelViewSet):
    queryset = BusinessLocation.objects.all()
    serializer_class = BusinessLocationSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from django.db import connection
from rest_framework.permissions import AllowAny

class HealthCheckView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        try:
            connection.ensure_connection()
            return Response({'status': 'ok', 'database': 'connected'}, status=200)
        except Exception as e:
            return Response({'status': 'error', 'database': 'disconnected', 'error_detail': str(e)}, status=503)
