# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-09-07

### Added
- **Multi-Tenant Architecture**: Strict row-level isolation via `TenantManager`.
- **Booking Engine**: Advanced scheduling, buffer times, and service management.
- **Support & Operations**: Centralized ticket system, knowledge base, notification center, and export capabilities.
- **Enterprise DevOps**: Fully dockerized stack (Celery, Redis, Postgres, Gunicorn).
- **SEO & Accessibility**: WCAG compliant templates, canonical URLs, robots.txt, and sitemaps.
- **Demo Data Generator**: Embedded management command for initializing environments.

### Changed
- Standardized UI/UX across all 35+ templates.
- Abstracted file and email storage to allow Drop-In cloud replacements.

### Security
- Integrated `AuditLog` mapping User Agents and IPs.
- Configured Production-grade CSRF/Session cookie protection.
