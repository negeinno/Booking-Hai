from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .forms import UserRegistrationForm, UserUpdateForm, ProfileUpdateForm

def register(request):
    if request.user.is_authenticated:
        return redirect('accounts:dashboard')
        
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, f"Account created for {user.first_name}!")
            
            # Redirect based on role
            return redirect('accounts:dashboard')
    else:
        form = UserRegistrationForm()
        
    return render(request, 'accounts/register.html', {'form': form})

@login_required
def dashboard_redirect(request):
    """Route user to the correct dashboard based on role."""
    if request.user.profile.is_business_owner:
        if not request.user.businesses.exists():
            return redirect('businesses:setup')
        return redirect('dashboard:home')
    else:
        return redirect('customer_dashboard')

@login_required
def customer_dashboard(request):
    """Customer Dashboard."""
    # If a business owner accidentally gets here, redirect them
    if request.user.profile.is_business_owner:
        return redirect('accounts:dashboard')
    
    return render(request, 'accounts/customer_dashboard.html')

@login_required
def business_dashboard(request):
    """Business Owner Dashboard."""
    # If a customer accidentally gets here, redirect them
    if request.user.profile.is_customer:
        return redirect('accounts:customer_dashboard')
        
    # Enforce onboarding
    if not request.user.businesses.exists():
        return redirect('businesses:setup')
        
    # Get the user's business
    business = request.user.businesses.first()
        
    return render(request, 'accounts/business_dashboard.html', {'business': business})

@login_required
def profile(request):
    """Profile View and Update."""
    if request.method == 'POST':
        u_form = UserUpdateForm(request.POST, instance=request.user)
        p_form = ProfileUpdateForm(request.POST, request.FILES, instance=request.user.profile)
        
        if u_form.is_valid() and p_form.is_valid():
            u_form.save()
            p_form.save()
            messages.success(request, 'Your profile has been updated!')
            return redirect('accounts:profile')
    else:
        u_form = UserUpdateForm(instance=request.user)
        p_form = ProfileUpdateForm(instance=request.user.profile)
        
    context = {
        'u_form': u_form,
        'p_form': p_form
    }
    return render(request, 'accounts/profile.html', context)
