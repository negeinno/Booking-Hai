import React from 'react';
import { Link } from 'react-router-dom';

const Discover = () => {
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

Discover Businesses - Booking Hai

<div className="container section-padding py-5">
    <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Discover Services</h2>
        <div>
            <a to="" className="btn btn-primary fw-medium me-2"><i className="bi bi-grid-fill me-1"></i> Grid</Link>
            <a to="" className="btn btn-outline-secondary fw-medium"><i className="bi bi-map me-1"></i> Map</Link>
        </div>
    </div>
    
    {/* Search Bar */}
    <div className="card border-0 shadow-sm rounded-4 p-3 mb-5">
        <form method="get" className="row g-2">
            <div className="col-md-5">
                <input type="text" name="q" className="form-control form-control-lg border-light bg-light shadow-none" placeholder="Service or Business Name" value="" />
            </div>
            <div className="col-md-5">
                <div className="input-group input-group-lg border-light bg-light rounded-3 overflow-hidden">
                    <input type="text" name="loc" id="locationInput" className="form-control bg-light border-0 shadow-none" placeholder="City or Location" value="" />
                    <button type="button" className="btn bg-light border-0 text-primary px-3" id="useLocationBtn" title="Use my current location">
                        <i className="bi bi-crosshair"></i>
                    </button>
                </div>
            </div>
            <div className="col-md-2">
                <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold shadow-sm">Search</button>
            </div>
        </form>
    </div>

    
    </div>

    {/* Results Grid */}
    <div className="row g-4">
        
        <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                
                    <img src="" className="card-img-top object-fit-cover" height="160" alt="" />
                
                    <div className="bg-secondary bg-opacity-10 w-100 d-flex align-items-center justify-content-center" >
                        <i className="bi bi-image text-secondary fs-1 opacity-50"></i>
                    </div>
                
                
                <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="fw-bold mb-0"></h5>
                        <span className="badge bg-light text-dark"><i className="bi bi-star-fill text-warning me-1"></i> 4.8</span>
                    </div>
                    <p className="text-primary small fw-medium mb-3"></p>
                    
                    <div className="text-muted small mb-4">
                        <i className="bi bi-geo-alt me-1"></i> , 
                        <br />
                        <i className="bi bi-shop me-1 mt-1"></i> 
                    </div>
                    
                    <a to="" className="btn btn-outline-primary w-100 fw-medium">Book Now</Link>
                </div>
            </div>
        </div>
        
        <div className="col-12 text-center py-5">
            <div className="card border-0 shadow-sm rounded-4 p-5 text-muted">
                <i className="bi bi-search fs-1 mb-3 opacity-50"></i>
                <h5>No businesses found</h5>
                <p>Try adjusting your search filters or location.</p>
            </div>
        </div>
        
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

export default Discover;
