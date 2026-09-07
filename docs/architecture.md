# System Architecture

Booking Hai follows a modern, scalable, enterprise SaaS architecture.

## Overview
- **Framework**: Django 5.x
- **Database**: PostgreSQL (with row-level Tenant Isolation)
- **Cache & Broker**: Redis
- **Background Processing**: Celery
- **Web Server**: Gunicorn

## Multi-Tenant Isolation
All database queries are forcibly scoped to the logged-in Business via `TenantManager` and `TenantMiddleware`. This ensures strictly separated data environments within a shared schema.

## Background Jobs
Celery manages heavy workloads to keep API responses under 200ms:
- Email Dispatching
- Report Generation (CSV/Excel)
- Subscription webhooks processing