import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            

    {/* Navbar */}
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm py-3">
        <div className="container">
            <a className="navbar-brand" to="">Booking Hai.</Link>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" to="#features">Features</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" to="">Map</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" to="">Directory</Link>
                    </li>
                </ul>
                <div className="d-flex gap-2 align-items-center">
                    
                        <a to="" className="btn btn-outline-primary border-0 me-2 fw-medium">Dashboard</Link>
                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle fw-bold text-dark d-flex align-items-center" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                
                                    <img src="" alt="User" className="rounded-circle me-2 object-fit-cover" width="32" height="32" />
                                
                                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-2 small" >
                                        
                                    </div>
                                
                                
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end shadow border-0 rounded-3 mt-2">
                                <li><a className="dropdown-item py-2" to="">Profile</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <form method="post" action="">
                                        
                                        <button type="submit" className="dropdown-item py-2 text-danger">Log out</button>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    
                        <a to="" className="btn btn-outline-primary fw-medium">Log in</Link>
                        <a to="" className="btn btn-primary fw-bold shadow-sm">Get Started</Link>
                    
                </div>
            </div>
        </div>
    </nav>

    {/* Main Content */}



Dashboard - Booking Hai


<div className="container section-padding py-5">
    <div className="row mb-5 align-items-center">
        <div className="col-md-8">
            <h2 className="fw-bold mb-1">Hello, ! 👋</h2>
            <p className="text-muted mb-0">Here is an overview of your upcoming appointments.</p>
        </div>
        <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <a to="" className="btn btn-outline-primary fw-medium px-4">Browse Businesses</Link>
        </div>
    </div>

    <h4 className="fw-bold mb-4">Upcoming Bookings</h4>
    
    <div className="row g-4 mb-5">
        {/* Placeholder for upcoming bookings */}
        <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 h-100 p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="badge bg-primary-subtle text-primary fw-bold px-3 py-2 rounded-pill">Tomorrow</div>
                    <i className="bi bi-calendar-event text-muted fs-4"></i>
                </div>
                <h5 className="fw-bold mb-1">Haircut & Styling</h5>
                <p className="text-muted small mb-4">with <span className="fw-medium text-dark">Urban Salon</span></p>
                <div className="d-flex align-items-center text-muted small fw-medium">
                    <i className="bi bi-clock me-2"></i> 10:00 AM - 11:00 AM
                </div>
            </div>
        </div>
        
        <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 h-100 p-4 border border-dashed bg-light d-flex align-items-center justify-content-center text-center" >
                <div>
                    <div className="rounded-circle bg-white shadow-sm d-inline-flex align-items-center justify-content-center mb-3" >
                        <i className="bi bi-plus text-primary fs-3"></i>
                    </div>
                    <h6 className="fw-bold">Book a new appointment</h6>
                    <p className="text-muted small mb-0">Find a business near you</p>
                </div>
            </div>
        </div>
    </div>

    <h4 className="fw-bold mb-4">Past Bookings</h4>
    <div className="card border-0 shadow-sm rounded-4 p-0 overflow-hidden">
        <ul className="list-group list-group-flush">
            <li className="list-group-item p-4 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <div className="rounded bg-light d-flex align-items-center justify-content-center me-4" >
                        <span className="text-muted fw-bold">AUG</span>
                    </div>
                    <div>
                        <h6 className="fw-bold mb-1">Consultation Session</h6>
                        <p className="text-muted small mb-0">Legal Experts Ltd</p>
                    </div>
                </div>
                <div className="text-end">
                    <div className="fw-bold mb-1">Aug 15, 2026</div>
                    <span className="badge bg-success-subtle text-success">Completed</span>
                </div>
            </li>
        </ul>
    </div>
</div>


    <main>
        
        
    </main>

    {/* Footer */}
    <footer>
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-4">
                    <h5 className="fw-bold mb-3 fs-3">Booking Hai. 🌶️</h5>
                    <p className="text-muted fw-medium fs-5">India's most lit platform to manage your dhanda. Create your booking page and get customers instantly. 100% Swag.</p>
                </div>
                <div className="col-lg-2 col-6">
                    <h6 className="fw-bold mb-3">Product</h6>
                    <a to="#features" className="footer-link">Features</Link>
                    <a to="#"  className="footer-link">Pricing</Link>
                    <a to="#"  className="footer-link">Integrations</Link>
                    <a to="#"  className="footer-link">Changelog</Link>
                </div>
                <div className="col-lg-2 col-6">
                    <h6 className="fw-bold mb-3">Resources</h6>
                    <a to="#"  className="footer-link">Documentation</Link>
                    <a to="#"  className="footer-link">Help Center</Link>
                    <a to="#"  className="footer-link">Blog</Link>
                    <a to="#"  className="footer-link">Community</Link>
                </div>
                <div className="col-lg-2 col-6">
                    <h6 className="fw-bold mb-3">Company</h6>
                    <a to="#"  className="footer-link">About</Link>
                    <a to="#"  className="footer-link">Customers</Link>
                    <a to="#"  className="footer-link">Careers</Link>
                    <a to="#"  className="footer-link">Contact</Link>
                </div>
                <div className="col-lg-2 col-6">
                    <h6 className="fw-bold mb-3">Legal</h6>
                    <a to="#"  className="footer-link">Privacy Policy</Link>
                    <a to="#"  className="footer-link">Terms of Service</Link>
                </div>
            </div>
            <div className="border-top mt-5 pt-4 text-center text-muted small">
                <p>&copy;  Booking Hai. All rights reserved.</p>
            </div>
        </div>
    </footer>

    {/* Bootstrap JS */}
    
    
    

        </>
    );
};

export default Dashboard;
