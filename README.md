# Booking Hai

> Create your booking page. Accept appointments effortlessly.

Booking Hai is a premium, highly-scalable SaaS platform allowing business owners (salons, clinics, professionals) to instantly create location-aware booking pages, manage staff, handle multi-branch operations, and accept appointments.

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
- [ ] Phase 8: Payments & Subscriptions (In Progress)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on branch naming, semantic commits, and PR templates.

## License
MIT License. See [LICENSE](LICENSE) for details.
