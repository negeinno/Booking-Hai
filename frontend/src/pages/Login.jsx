import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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



Log In - Booking Hai


<div className="container section-padding">
    <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
            <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5">
                <div className="text-center mb-4">
                    <h2 className="fw-bold mb-2">Welcome back</h2>
                    <p className="text-muted">Log in to manage your appointments.</p>
                </div>
                
                
                <div className="alert alert-danger rounded-md">
                    Your username and password didn't match. Please try again.
                </div>
                

                <form method="post" action="">
                    
                    
                    <div className="mb-3">
                        <label htmlFor="" className="form-label fw-medium">Username</label>
                        <input type="text" name="" className="form-control form-control-lg rounded-md bg-light border-0" id="" required autofocus />
                    </div>
                    
                    <div className="mb-4">
                        <div className="d-flex justify-content-between">
                            <label htmlFor="" className="form-label fw-medium">Password</label>
                            <Link to="" className="small text-decoration-none">Forgot password?</Link>
                        </div>
                        <input type="password" name="" className="form-control form-control-lg rounded-md bg-light border-0" id="" required />
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold mb-3">Log in</button>
                    <input type="hidden" name="next" value="" />
                </form>
                
                <div className="text-center mt-3">
                    <span className="text-muted">Don't have an account?</span>
                    <Link to="" className="fw-medium text-decoration-none">Sign up</Link>
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

export default Login;
