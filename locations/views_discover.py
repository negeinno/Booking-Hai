from django.shortcuts import render
from .models import BusinessLocation
from businesses.models import Category

def grid_view(request):
    query = request.GET.get('q', '')
    location_query = request.GET.get('loc', '')
    
    locations = BusinessLocation.objects.filter(status='active').select_related('business')
    
    if query:
        locations = locations.filter(business__name__icontains=query) | locations.filter(business__category__name__icontains=query)
    
    if location_query:
        locations = locations.filter(city__icontains=location_query)
        
    categories = Category.objects.all()
    
    return render(request, 'locations/discover_grid.html', {
        'locations': locations,
        'categories': categories,
        'query': query,
        'location_query': location_query
    })

def map_view(request):
    query = request.GET.get('q', '')
    location_query = request.GET.get('loc', '')
    
    locations = BusinessLocation.objects.filter(status='active').select_related('business')
    
    if query:
        locations = locations.filter(business__name__icontains=query) | locations.filter(business__category__name__icontains=query)
    
    if location_query:
        locations = locations.filter(city__icontains=location_query)
        
    # We will pass the serialized locations to JS
    locations_json = []
    for loc in locations:
        if loc.latitude and loc.longitude:
            locations_json.append({
                'id': loc.id,
                'name': loc.business.name,
                'branch': loc.name,
                'lat': float(loc.latitude),
                'lng': float(loc.longitude),
                'city': loc.city,
                'url': f"/business/{loc.business.slug}/"
            })
            
    categories = Category.objects.all()
    
    return render(request, 'locations/discover_map.html', {
        'locations_json': locations_json,
        'categories': categories,
        'query': query,
        'location_query': location_query
    })
