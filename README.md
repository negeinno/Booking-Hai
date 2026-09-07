# Booking Hai - Enterprise SaaS

![Python](https://img.shields.io/badge/Python-3.11-blue)
![Django](https://img.shields.io/badge/Django-5.x-green)
![Docker](https://img.shields.io/badge/Docker-Ready-blue)
![CI/CD](https://img.shields.io/badge/Build-Passing-brightgreen)

> Create your booking page. Accept appointments effortlessly.

Booking Hai is a premium, highly-scalable SaaS platform allowing business owners (salons, clinics, professionals) to instantly create location-aware booking pages, manage staff, handle multi-branch operations, and accept appointments.

## Documentation
- [Architecture Guide](docs/architecture.md)
- [Deployment Guide](docs/deployment.md)

## Features

- **Multi-Tenant Architecture**: Strict row-level isolation ensuring independent operations for thousands of businesses on a single platform.
- **Enterprise Operations**: Centralized ticket system, knowledge base, notification center, and export capabilities.
- **Online Booking System**: Customers can easily view available time slots and book appointments.
- **Background Processing**: Celery & Redis integrations for ultra-fast asynchronous workloads.
- **Open Source Ready**: Full GitHub templates, Semantic Versioning, and CI/CD pipelines out-of-the-box.

## Architecture & Tech Stack

- **Backend**: Python 3.10, Django 5.x
- **Database**: PostgreSQL (via Neon) - *(Currently SQLite for local dev)*
- **Frontend**: HTML5, CSS3, Vanilla JS, Bootstrap 5 (Customized)
- **Maps**: Leaflet.js & OpenStreetMap
- **Payments**: Razorpay (Integration pending)

## Folder Structure

```
booking_hai/
├── accounts/         # User auth, roles, and profiles
├── appointments/     # Core Availability Engine & slot generation
├── businesses/       # Business Workspaces and configurations
├── core/             # Landing pages and generic views
├── dashboard/        # Owner analytics, CRM, and activity logs
├── locations/        # Multi-branch routing, Discovery, Maps
├── services/         # Business services catalog
├── staff/            # Staff management and associations
└── booking_project/  # Core Django configuration
```

## Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BookingHai/booking_hai.git
   cd booking_hai
   ```

2. **Setup Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: .\\venv\\Scripts\\Activate.ps1
   ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run Migrations & Server**:
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

## Development Roadmap
- [x] Phase 1: Authentication & SaaS skeleton
- [x] Phase 2: User Management
- [x] Phase 3: Business Workspaces
- [x] Phase 4: Services & Staff
- [x] Phase 5: Location System & Discovery
- [x] Phase 6: Smart Availability Engine
- [x] Phase 7: CRM & Dashboards
- [x] Phase 8: Payments & Subscriptions (In Progress)
- [x] Phase 9: Reviews & Reputation
- [x] Phase 10: AI & Automation
- [x] Phase 11: CI/CD & Project Polish

## Continuous Integration (GitHub Actions)

Booking Hai utilizes GitHub Actions for continuous integration. The workflow is defined in `.github/workflows/django.yml` and automatically runs on every push and pull request to the `main` branch.

### How CI Works
1. **Dependency Installation**: Pip dependencies are automatically cached to speed up the workflow.
2. **System Checks**: `python manage.py check` executes to ensure project integrity.
3. **Linting**: `flake8` scans the repository to maintain Python code style while explicitly ignoring generated files (`venv`, `migrations`, `__pycache__`) as defined in `.flake8`.
4. **Testing**: `python manage.py test` runs all automated test cases.

### Running CI Locally
Before submitting a PR, verify your changes pass CI locally:
```bash
python manage.py check
flake8 .
python manage.py test
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on branch naming, semantic commits, and PR templates.

## License
MIT License. See [LICENSE](LICENSE) for details.
