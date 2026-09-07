import logging
from django.core.mail import send_mail
from django.conf import settings

logger = logging.getLogger(__name__)

class AbstractEmailProvider:
    def send(self, subject, body_text, body_html, to_email):
        raise NotImplementedError("Subclasses must implement send()")

class DjangoEmailProvider(AbstractEmailProvider):
    def send(self, subject, body_text, body_html, to_email):
        try:
            send_mail(
                subject=subject,
                message=body_text,
                from_email=settings.DEFAULT_FROM_EMAIL if hasattr(settings, 'DEFAULT_FROM_EMAIL') else 'noreply@bookinghai.in',
                recipient_list=[to_email],
                html_message=body_html,
                fail_silently=False,
            )
            return True
        except Exception as e:
            logger.error(f"Failed to send email via DjangoEmailProvider: {e}")
            return False

class EmailService:
    def __init__(self, provider: AbstractEmailProvider = None):
        self.provider = provider or DjangoEmailProvider()

    def send_email(self, subject, body_text, body_html, to_email):
        """
        Sends an email using the configured provider.
        """
        return self.provider.send(subject, body_text, body_html, to_email)
