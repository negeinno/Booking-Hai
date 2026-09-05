# Production Deployment Guide

Booking Hai is optimized for zero-downtime deployment on Render.com utilizing Neon PostgreSQL for the database layer.

## Render Configuration
1. Connect your GitHub repository to Render.
2. Select **Web Service**.
3. Render will automatically parse the `render.yaml` configuration file and generate the web service and the environment.

## Environment Variables
Ensure the following variables are securely injected into your Render dashboard or `.env` file:
- `SECRET_KEY`
- `DEBUG` (Must be False)
- `DATABASE_URL` (Provided by Neon)
- `ALLOWED_HOSTS` (e.g. your-app.onrender.com)
- `RAZORPAY_KEY_ID` (For Phase 8 functionality)

## Build Process
Render executes `build.sh` automatically which:
1. Installs Python dependencies (`pip install -r requirements.txt`).
2. Runs `python manage.py collectstatic --no-input` (compresses and caches assets via WhiteNoise).
3. Executes `python manage.py migrate` to securely upgrade the PostgreSQL schema.

## Troubleshooting
- **500 Errors**: Ensure `ALLOWED_HOSTS` includes your exact Render domain.
- **Missing Styles**: Ensure `WhiteNoiseMiddleware` is correctly placed directly beneath `SecurityMiddleware`.
- **Database Refused**: Verify the `DATABASE_URL` string matches the connection pooling URL provided by Neon.