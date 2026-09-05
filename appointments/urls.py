from django.urls import path
from . import views

app_name = 'appointments'

urlpatterns = [
    path('api/slots/', views.get_available_slots, name='api_slots'),
    # Note: Full booking funnel views will be added here
]
