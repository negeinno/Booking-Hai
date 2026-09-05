from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import StaffMember
from .forms import StaffForm

@login_required
def staff_list(request):
    business = request.user.businesses.first()
    if not business:
        return redirect('businesses:setup')
    staff_members = business.staff_members.all()
    return render(request, 'staff/list.html', {'staff_members': staff_members, 'business': business})

@login_required
def staff_create(request):
    business = request.user.businesses.first()
    if request.method == 'POST':
        form = StaffForm(request.POST, request.FILES, business=business)
        if form.is_valid():
            staff = form.save(commit=False)
            staff.business = business
            staff.save()
            form.save_m2m() # Important for many-to-many
            messages.success(request, "Staff member added successfully.")
            return redirect('staff:list')
    else:
        form = StaffForm(business=business)
    return render(request, 'staff/form.html', {'form': form, 'title': 'Add Staff Member'})

@login_required
def staff_update(request, pk):
    business = request.user.businesses.first()
    staff = get_object_or_404(StaffMember, pk=pk, business=business)
    if request.method == 'POST':
        form = StaffForm(request.POST, request.FILES, instance=staff, business=business)
        if form.is_valid():
            form.save()
            messages.success(request, "Staff member updated successfully.")
            return redirect('staff:list')
    else:
        form = StaffForm(instance=staff, business=business)
    return render(request, 'staff/form.html', {'form': form, 'title': 'Edit Staff Member'})

@login_required
def staff_delete(request, pk):
    business = request.user.businesses.first()
    staff = get_object_or_404(StaffMember, pk=pk, business=business)
    if request.method == 'POST':
        staff.delete()
        messages.success(request, "Staff member removed.")
        return redirect('staff:list')
    return render(request, 'staff/delete_confirm.html', {'staff': staff})
