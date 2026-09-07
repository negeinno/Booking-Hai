# Deployment Guide

Booking Hai is designed to be deployed using Docker or directly onto PaaS providers like Render.

## Docker Deployment (Recommended)
1. Configure environment variables in `.env` (refer to `.env.example`).
2. Build and start services using:
   `docker-compose -f docker-compose.prod.yml up -d --build`
3. The cluster provisions PostgreSQL, Redis, Celery (Worker & Beat), and a Gunicorn web server.

## Render Deployment
1. Connect your GitHub repository to Render.
2. The `render.yaml` Blueprint automatically provisions the Web Service, Background Worker, and Redis Cache.
3. Ensure you link a managed PostgreSQL database.