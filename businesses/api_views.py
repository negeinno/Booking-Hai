from rest_framework import generics, permissions
from rest_framework.response import Response
from django.db.models import Q
from .models import Business
from locations.models import BusinessLocation
from rest_framework import serializers

class BusinessLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusinessLocation
        fields = ('id', 'name', 'address_line_1', 'city', 'state', 'latitude', 'longitude')

class BusinessSearchSerializer(serializers.ModelSerializer):
    locations = BusinessLocationSerializer(many=True, read_only=True)
    category_name = serializers.CharField(source='category.name', read_only=True)
    
    class Meta:
        model = Business
        fields = ('id', 'name', 'short_description', 'logo', 'average_rating', 'total_reviews', 'category_name', 'locations')

class ShopSearchAPIView(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = BusinessSearchSerializer

    def get_queryset(self):
        query = self.request.query_params.get('q', '')
        location = self.request.query_params.get('location', '')
        
        queryset = Business.objects.filter(status='active', is_verified=True)
        
        if query:
            queryset = queryset.filter(
                Q(name__icontains=query) | 
                Q(category__name__icontains=query) |
                Q(short_description__icontains=query)
            )
            
        if location:
            queryset = queryset.filter(
                Q(locations__city__icontains=location) |
                Q(locations__state__icontains=location) |
                Q(locations__address_line_1__icontains=location)
            ).distinct()
            
        return queryset
