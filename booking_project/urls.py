from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('core.urls')),
    path('accounts/', include('accounts.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('business/', include('businesses.urls')),
    path('services/', include('services.urls')),
    path('staff/', include('staff.urls')),
    path('locations/', include('locations.urls')),
    path('discover/', include('locations.urls_discover')),
    path('appointments/', include('appointments.urls')),
    path('dashboard/', include('dashboard.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
