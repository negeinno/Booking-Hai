import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            

    {/* Navbar */}
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm py-3">
        <div className="container">
            <Link className="navbar-brand" to="/">Booking Hai.</Link>
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
                    
                        <Link to="/dashboard" className="btn btn-outline-primary border-0 me-2 fw-medium">Dashboard</Link>
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
                    
                        <Link to="/login" className="btn btn-outline-primary fw-medium">Log in</Link>
                        <Link to="/register" className="btn btn-primary fw-bold shadow-sm">Get Started</Link>
                    
                </div>
            </div>
        </div>
    </nav>

    {/* Main Content */}



Sign Up - Booking Hai


<div className="container section-padding">
    <div className="row justify-content-center">
        <div className="col-md-8 col-lg-7">
            <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold mb-2">Create your account</h2>
                    <p className="text-muted">Start accepting or booking appointments today.</p>
                </div>
                
                <form method="post" novalidate>
                    
                    
                    
                    <div className="alert alert-danger rounded-md mb-4">
                        
                            
                        
                    </div>
                    

                    
                        <div className="mb-4">
                            <label htmlFor="" className="form-label fw-medium"></label>
                            
                            
                                <div className="d-flex gap-3 mt-2">
                                    
                                        <div className="form-check flex-fill bg-light p-3 rounded-md border">
                                            
                                            <label className="form-check-label fw-medium ms-2 d-block stretched-link" htmlFor="">
                                                
                                            </label>
                                        </div>
                                    
                                </div>
                            
                                <input type="" 
                                       name="" 
                                       className="form-control form-control-lg bg-light border-0 is-invalid" 
                                       id="" 
                                       value=""
                                       required />
                            
                            
                            
                                <div className="form-text text-muted small mt-1"></div>
                            
                            
                            
                                <div className="invalid-feedback d-block mt-1">
                                    
                                        
                                    
                                </div>
                            
                        </div>
                    

                    <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold mb-3 mt-4">Create Account</button>
                </form>
                
                <div className="text-center mt-3">
                    <span className="text-muted">Already have an account?</span>
                    <Link to="/login" className="fw-medium text-decoration-none">Log in</Link>
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

export default Register;
