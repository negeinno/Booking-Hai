import multiprocessing
import os

# Binding
bind = "0.0.0.0:" + os.environ.get("PORT", "8000")

# Worker configuration
# (2 * CPUs) + 1 is the recommended formula
workers = int(os.environ.get("GUNICORN_WORKERS", 2))
worker_class = "sync" # Or 'gevent' for async workloads if needed later
threads = int(os.environ.get("GUNICORN_THREADS", 2))
timeout = int(os.environ.get("GUNICORN_TIMEOUT", 120))
graceful_timeout = int(os.environ.get("GUNICORN_GRACEFUL_TIMEOUT", 30))

# Logging
accesslog = "-"
errorlog = "-"
loglevel = os.environ.get("GUNICORN_LOGLEVEL", "info")

# Server mechanics
max_requests = 1000
max_requests_jitter = 50
keepalive = 2
