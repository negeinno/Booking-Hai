from django.http import JsonResponse

def index(request):
    return JsonResponse({
        "status": "Backend Running",
        "service": "BookingHai API"
    })
