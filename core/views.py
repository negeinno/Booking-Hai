from django.shortcuts import render
from businesses.models import Business, Category
from locations.models import BusinessLocation

def index(request):
    categories = Category.objects.all()[:6]
    query = request.GET.get('q', '')
    location_query = request.GET.get('loc', '')
    
    results = None
    if query or location_query:
        # Very basic search for demo purposes
        results = BusinessLocation.objects.filter(status='active').select_related('business')
        if query:
            results = results.filter(business__name__icontains=query)
        if location_query:
            results = results.filter(city__icontains=location_query)
            
    return render(request, 'core/index.html', {
        'categories': categories,
        'query': query,
        'location_query': location_query,
        'results': results
    })
