import React from 'react';
import { Link } from 'react-router-dom';

const Business = () => {
    return (
        <>
            

    {/* Navbar */}
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm py-3">
        <div className="container">
            <Link className="navbar-brand" to="">Booking Hai.</Link>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="#features">Features</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="">Map</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="">Directory</Link>
                    </li>
                </ul>
                <div className="d-flex gap-2 align-items-center">
                    
                        <Link to="" className="btn btn-outline-primary border-0 me-2 fw-medium">Dashboard</Link>
                        <div className="dropdown">
                            <Link className="nav-link dropdown-toggle fw-bold text-dark d-flex align-items-center" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                
                                    <img src="" alt="User" className="rounded-circle me-2 object-fit-cover" width="32" height="32" />
                                
                                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-2 small" style={{width: '32px', height: '32px'}}>
                                        
                                    </div>
                                
                                
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end shadow border-0 rounded-3 mt-2">
                                <li><Link className="dropdown-item py-2" to="">Profile</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <form method="post" action="">
                                        
                                        <button type="submit" className="dropdown-item py-2 text-danger">Log out</button>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    
                        <Link to="" className="btn btn-outline-primary fw-medium">Log in</Link>
                        <Link to="" className="btn btn-primary fw-bold shadow-sm">Get Started</Link>
                    
                </div>
            </div>
        </div>
    </nav>

    {/* Main Content */}



 - Booking Hai


{/* Cover Image Section */}
<div className="position-relative bg-light" style={{height: '300px', borderBottom: '1px solid var(--border-color)'}}>
    
        <img src="" className="w-100 h-100 object-fit-cover" alt=" cover" />
    
        <div className="w-100 h-100 bg-secondary d-flex align-items-center justify-content-center">
            <i className="bi bi-shop text-muted" style={{fontSize: '5rem', opacity: '0.2'}}></i>
        </div>
    
    
    {/* Logo overlay */}
    <div className="container position-relative">
        <div className="position-absolute" style={{bottom: '-50px', left: '1rem'}}>
            
                <img src="" className="rounded-4 shadow bg-white object-fit-cover border" width="120" height="120" alt=" logo" />
            
                <div className="rounded-4 shadow bg-primary text-white d-flex align-items-center justify-content-center fw-bold fs-1 border border-white border-4" style={{width: '120px', height: '120px'}}>
                    
                </div>
            
        </div>
    </div>
</div>

<div className="container section-padding" style={{marginTop: '60px'}}>
    <div className="row">
        {/* Main Content */}
        <div className="col-lg-8 pe-lg-5 mb-5 mb-lg-0">
            <div className="d-flex align-items-center mb-2">
                <h1 className="fw-bold mb-0 me-3"></h1>
                <span className="badge bg-primary-subtle text-primary"></span>
            </div>
            <p className="text-muted fs-5 mb-4"></p>
            
            <div className="card border-0 bg-light rounded-4 p-4 mb-5 shadow-sm">
                <h5 className="fw-bold mb-3">About Us</h5>
                <p className="mb-0 text-muted lh-lg">
                    
                </p>
            </div>
            
            <h4 className="fw-bold mb-4">Our Services</h4>
            
                <div className="row g-4 mb-5">
                
                    
                    <div className="col-md-6">
                        <div className="card border-0 shadow-sm rounded-4 h-100 p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <div>
                                    <h5 className="fw-bold mb-1"></h5>
                                    <span className="badge bg-light text-dark mb-2"> mins</span>
                                </div>
                                <div className="fs-5 fw-bold text-primary">$</div>
                            </div>
                            <p className="text-muted small mb-4 flex-grow-1"></p>
                            <button className="btn btn-outline-primary fw-medium w-100" >Book Now</button>
                        </div>
                    </div>
                    
                
                </div>
            
                <div className="card border-0 shadow-sm rounded-4 p-5 text-center text-muted border border-dashed mb-5">
                    <i className="bi bi-calendar2-x fs-1 mb-3 text-secondary"></i>
                    <h5>No services available yet</h5>
                    <p className="mb-0">Please check back later.</p>
                </div>
            

            <h4 className="fw-bold mb-4">Our Team</h4>
            
                <div className="row g-4">
                
                    
                    <div className="col-md-6">
                        <div className="d-flex align-items-center p-3 rounded-4 bg-light">
                            
                                <img src="" className="rounded-circle object-fit-cover me-3" width="60" height="60" alt="" />
                            
                                <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-3 fw-bold" style={{width: '60px', height: '60px'}}>
                                    
                                </div>
                            
                            <div>
                                <h6 className="fw-bold mb-0"></h6>
                                <p className="text-muted small mb-0"></p>
                            </div>
                        </div>
                    </div>
                    
                
                </div>
            
                <p className="text-muted">No staff members listed yet.</p>
            
        </div>
        
        <div className="col-lg-4">
            <div className="card border-0 shadow-lg rounded-4 p-4 sticky-top" style={{top: '100px'}}>
                <button className="btn btn-primary btn-lg w-100 fw-bold shadow-sm mb-4" >Book Appointment</button>
                
                <h6 className="fw-bold mb-3 text-uppercase small text-muted">Business Status</h6>
                <div className="mb-4">
                    
                        <span className="badge bg-success">Active & Accepting Bookings</span>
                    
                        <span className="badge bg-secondary">Temporarily Closed</span>
                    
                </div>

                <h6 className="fw-bold mb-3 text-uppercase small text-muted">Working Hours</h6>
                <ul className="list-unstyled mb-4 text-muted small">
                    
                    <li className="d-flex justify-content-between mb-2 pb-2 border-bottom border-light">
                        <span className="fw-medium"></span>
                        
                            <span className="text-danger">Closed</span>
                        
                            <span> - </span>
                        
                    </li>
                    
                </ul>                
                <h6 className="fw-bold mb-3 text-uppercase small text-muted">Contact Info</h6>
                <ul className="list-unstyled mb-4">
                    
                    <li className="d-flex mb-3">
                        <i className="bi bi-geo-alt text-primary me-3 fs-5"></i>
                        <span className="text-muted">
                            <br />
                            ,  
                        </span>
                    </li>
                    
                    
                    
                    <li className="d-flex mb-3 align-items-center">
                        <i className="bi bi-telephone text-primary me-3 fs-5"></i>
                        <span className="text-muted"></span>
                    </li>
                    
                    
                    
                    <li className="d-flex mb-3 align-items-center">
                        <i className="bi bi-envelope text-primary me-3 fs-5"></i>
                        <span className="text-muted"></span>
                    </li>
                    
                    
                    
                    <li className="d-flex align-items-center">
                        <i className="bi bi-globe text-primary me-3 fs-5"></i>
                        <Link to="" target="_blank" className="text-decoration-none text-muted"></Link>
                    </li>
                    
                </ul>
                
                <div className="d-flex gap-2">
                    <button className="btn btn-light flex-fill fw-medium border shadow-sm" >
                        <i className="bi bi-share me-2"></i> Share
                    </button>
                    <button className="btn btn-light flex-fill fw-medium border shadow-sm text-danger" >
                        <i className="bi bi-flag me-2"></i> Report
                    </button>
                </div>
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
                    <Link to="#features" className="footer-link">Features</Link>
                    <Link to="#"  className="footer-link">Pricing</Link>
                    <Link to="#"  className="footer-link">Integrations</Link>
                    <Link to="#"  className="footer-link">Changelog</Link>
                </div>
                <div className="col-lg-2 col-6">
                    <h6 className="fw-bold mb-3">Resources</h6>
                    <Link to="#"  className="footer-link">Documentation</Link>
                    <Link to="#"  className="footer-link">Help Center</Link>
                    <Link to="#"  className="footer-link">Blog</Link>
                    <Link to="#"  className="footer-link">Community</Link>
                </div>
                <div className="col-lg-2 col-6">
                    <h6 className="fw-bold mb-3">Company</h6>
                    <Link to="#"  className="footer-link">About</Link>
                    <Link to="#"  className="footer-link">Customers</Link>
                    <Link to="#"  className="footer-link">Careers</Link>
                    <Link to="#"  className="footer-link">Contact</Link>
                </div>
                <div className="col-lg-2 col-6">
                    <h6 className="fw-bold mb-3">Legal</h6>
                    <Link to="#"  className="footer-link">Privacy Policy</Link>
                    <Link to="#"  className="footer-link">Terms of Service</Link>
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

export default Business;
