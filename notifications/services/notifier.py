import logging

logger = logging.getLogger(__name__)

class NotificationService:
    """
    Modular notification service. 
    Can be expanded to use SendGrid/AWS SES for email and Twilio for WhatsApp.
    """
    
    @classmethod
    def send_booking_confirmation(cls, appointment):
        logger.info(f"Sending booking confirmation for {appointment.booking_id} via Email/WhatsApp.")
        # STUB: Implement actual SendGrid / Twilio API calls here.

    @classmethod
    def send_payment_receipt(cls, payment):
        logger.info(f"Sending receipt for {payment.appointment.booking_id}.")
        # STUB
        
    @classmethod
    def send_cancellation(cls, appointment):
        logger.info(f"Sending cancellation notice for {appointment.booking_id}.")
        # STUB
