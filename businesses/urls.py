from django.urls import path
from . import views

app_name = 'businesses'

urlpatterns = [
    path('setup/', views.onboarding_wizard, name='setup'),
    path('<slug:slug>/', views.public_business_page, name='public_page'),
]
