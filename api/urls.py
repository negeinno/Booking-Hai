from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'businesses', BusinessViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'staff', StaffMemberViewSet)
router.register(r'appointments', AppointmentViewSet)
router.register(r'locations', BusinessLocationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
