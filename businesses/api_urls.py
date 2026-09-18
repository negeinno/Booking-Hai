from django.urls import path
from .api_views import ShopSearchAPIView

urlpatterns = [
    path('search/', ShopSearchAPIView.as_view(), name='shop-search'),
]
