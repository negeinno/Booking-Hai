import logging

logger = logging.getLogger(__name__)

class AIGeneratorService:
    """
    Modular AI Generator Service.
    Designed to easily swap underlying models (OpenAI, Gemini, Anthropic) without altering business logic.
    """
    
    @classmethod
    def generate_business_bio(cls, business_name, services_list):
        logger.info(f"Generating AI bio for {business_name}")
        return f"{business_name} is a premier destination offering exceptional services like {', '.join(services_list)}."

    @classmethod
    def generate_promotion_text(cls, campaign_goal):
        logger.info(f"Generating AI promotion for goal: {campaign_goal}")
        return f"Don't miss out on our latest offer designed to {campaign_goal}!"
