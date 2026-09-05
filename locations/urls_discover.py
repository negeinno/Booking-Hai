from django.urls import path
from . import views_discover

app_name = 'discover'

urlpatterns = [
    path('', views_discover.grid_view, name='grid'),
    path('map/', views_discover.map_view, name='map'),
]
