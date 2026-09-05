from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Service
from .forms import ServiceForm

@login_required
def service_list(request):
    business = request.user.businesses.first()
    if not business:
        return redirect('businesses:setup')
    services = business.services.all()
    return render(request, 'services/list.html', {'services': services, 'business': business})

@login_required
def service_create(request):
    business = request.user.businesses.first()
    if request.method == 'POST':
        form = ServiceForm(request.POST, request.FILES)
        if form.is_valid():
            service = form.save(commit=False)
            service.business = business
            service.save()
            messages.success(request, "Service created successfully.")
            return redirect('services:list')
    else:
        form = ServiceForm()
    return render(request, 'services/form.html', {'form': form, 'title': 'Create Service'})

@login_required
def service_update(request, pk):
    business = request.user.businesses.first()
    service = get_object_or_404(Service, pk=pk, business=business)
    if request.method == 'POST':
        form = ServiceForm(request.POST, request.FILES, instance=service)
        if form.is_valid():
            form.save()
            messages.success(request, "Service updated successfully.")
            return redirect('services:list')
    else:
        form = ServiceForm(instance=service)
    return render(request, 'services/form.html', {'form': form, 'title': 'Edit Service'})

@login_required
def service_delete(request, pk):
    business = request.user.businesses.first()
    service = get_object_or_404(Service, pk=pk, business=business)
    if request.method == 'POST':
        service.delete()
        messages.success(request, "Service deleted.")
        return redirect('services:list')
    return render(request, 'services/delete_confirm.html', {'service': service})
