web: gunicorn booking_project.wsgi:application --config gunicorn.conf.py
worker: celery -A booking_project worker -l info
