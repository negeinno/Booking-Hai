from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Business, Category
from .forms import BusinessBasicForm, BusinessContactForm, BusinessBrandingForm

@login_required
def onboarding_wizard(request):
    """
    Unified view for the business creation wizard.
    Only allows Business Owners who do not already have a business.
    """
    # Security: only business owners can access
    if request.user.profile.role != 'business_owner':
        messages.error(request, "Only business owners can create a workspace.")
        return redirect('accounts:customer_dashboard')
        
    # Security: only one business allowed for now
    if request.user.businesses.exists():
        messages.info(request, "You already have a business workspace.")
        return redirect('accounts:business_dashboard')

    if request.method == 'POST':
        # We receive all data at once from the JS wizard
        basic_form = BusinessBasicForm(request.POST)
        contact_form = BusinessContactForm(request.POST)
        branding_form = BusinessBrandingForm(request.POST, request.FILES)
        
        if basic_form.is_valid() and contact_form.is_valid() and branding_form.is_valid():
            # Save basic form but don't commit to DB yet
            business = basic_form.save(commit=False)
            
            # Apply contact form data
            for field in contact_form.cleaned_data:
                setattr(business, field, contact_form.cleaned_data[field])
                
            # Apply branding form data
            for field in branding_form.cleaned_data:
                setattr(business, field, branding_form.cleaned_data[field])
                
            # Set owner
            business.owner = request.user
            business.save()
            
            messages.success(request, f"Welcome! {business.name} workspace has been created successfully.")
            return redirect('accounts:business_dashboard')
        else:
            messages.error(request, "There was an error creating your workspace. Please check the form.")
    else:
        basic_form = BusinessBasicForm()
        contact_form = BusinessContactForm()
        branding_form = BusinessBrandingForm()

    context = {
        'basic_form': basic_form,
        'contact_form': contact_form,
        'branding_form': branding_form,
    }
    return render(request, 'businesses/onboarding.html', context)

def public_business_page(request, slug):
    """Public page for a business."""
    business = get_object_or_404(Business, slug=slug, status='active')
    return render(request, 'businesses/public_page.html', {'business': business})
