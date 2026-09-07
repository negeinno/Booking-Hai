from django.utils.deprecation import MiddlewareMixin
from core.tenant import set_current_tenant, clear_current_tenant
from businesses.models import Business

class TenantMiddleware(MiddlewareMixin):
    """
    Middleware to set the current tenant (Business) in thread-local storage.
    Currently, it identifies the tenant based on the logged-in user's first associated business.
    In the future, this can be expanded to use subdomains (e.g., abc.bookinghai.in).
    """
    def process_request(self, request):
        clear_current_tenant()
        
        # Architecture for future subdomain-based resolution:
        # host = request.get_host().split(':')[0]
        # if host != 'bookinghai.in' and host != 'www.bookinghai.in':
        #     subdomain = host.split('.')[0]
        #     try:
        #         tenant = Business.objects.get(subdomain=subdomain)
        #         set_current_tenant(tenant)
        #         request.business = tenant
        #         return
        #     except Business.DoesNotExist:
        #         pass

        # Current implementation based on logged-in user:
        try:
            if request.user.is_authenticated:
                business = getattr(request.user, 'businesses', None)
                if business and business.exists():
                    tenant = business.first()
                    set_current_tenant(tenant)
                    request.business = tenant
                    return
                
                if hasattr(request.user, 'staffmember') and request.user.staffmember:
                    tenant = request.user.staffmember.business
                    set_current_tenant(tenant)
                    request.business = tenant
                    return
        except Exception as e:
            import logging
            logging.error(f"TenantMiddleware error (DB likely not ready): {e}")
        
        request.business = None

    def process_response(self, request, response):
        clear_current_tenant()
        return response

    def process_exception(self, request, exception):
        clear_current_tenant()
