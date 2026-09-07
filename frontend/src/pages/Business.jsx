import React from 'react';
import { Link } from 'react-router-dom';

const Business = () => {
    return (
        <>
            

    {/* Navbar */}
    <nav className="flex items-center justify-between py-4 bg-white sticky-top shadow-sm py-8">
        <div className="max-w-7xl mx-auto px-10 sm:px-14 lg:px-18">
            <Link className="text-2xl font-black tracking-tighter" to="/">Booking Hai.</Link>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mx-auto mb-6 mb-lg-0">
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
                <div className="flex gap-2 items-center">
                    
                        <Link to="/dashboard" className="inline-block px-14 py-8 bg-white text-slate-900 font-bold brutal-border brutal-shadow brutal-hover border-0 mr-6 font-medium">Dashboard</Link>
                        <div className="dropdown">
                            <Link className="nav-link dropdown-toggle font-bold text-slate-900 flex items-center" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                
                                    <img src="" alt="User" className="rounded-circle mr-6 object-fit-cover" width="32" height="32" />
                                
                                    <div className="rounded-circle bg-brand-blue text-white flex items-center justify-center mr-6 small" style={{width: '32px', height: '32px'}}>
                                        
                                    </div>
                                
                                
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end shadow border-0 rounded-3 mt-6">
                                <li><Link className="dropdown-item py-6" to="">Profile</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <form method="post" action="">
                                        
                                        <button type="submit" className="dropdown-item py-6 text-danger">Log out</button>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    
                        <Link to="/login" className="inline-block px-14 py-8 bg-white text-slate-900 font-bold brutal-border brutal-shadow brutal-hover font-medium">Log in</Link>
                        <Link to="/register" className="inline-block px-14 py-8 bg-brand-yellow text-slate-900 font-bold brutal-border brutal-shadow brutal-hover font-bold shadow-sm">Get Started</Link>
                    
                </div>
            </div>
        </div>
    </nav>

    {/* Main Content */}



 - Booking Hai


{/* Cover Image Section */}
<div className="position-relative bg-light" style={{height: '300px', borderBottom: '1px solid var(--border-color)'}}>
    
        <img src="" className="w-100 h-100 object-fit-cover" alt=" cover" />
    
        <div className="w-100 h-100 bg-secondary flex items-center justify-center">
            <i className="bi bi-shop text-muted" style={{fontSize: '5rem', opacity: '0.2'}}></i>
        </div>
    
    
    {/* Logo overlay */}
    <div className="max-w-7xl mx-auto px-10 sm:px-14 lg:px-18 position-relative">
        <div className="position-absolute" style={{bottom: '-50px', left: '1rem'}}>
            
                <img src="" className="rounded-4 shadow bg-white object-fit-cover border" width="120" height="120" alt=" logo" />
            
                <div className="rounded-4 shadow bg-brand-blue text-white flex items-center justify-center font-bold fs-1 border border-white border-4" style={{width: '120px', height: '120px'}}>
                    
                </div>
            
        </div>
    </div>
</div>

<div className="max-w-7xl mx-auto px-10 sm:px-14 lg:px-18 section-padding" style={{marginTop: '60px'}}>
    <div className="flex flex-wrap -mx-4">
        {/* Main Content */}
        <div className="w-full lg:w-8/12 px-10 pe-lg-5 mb-12 mb-lg-0">
            <div className="flex items-center mb-6">
                <h1 className="font-bold mb-2 mr-8"></h1>
                <span className="badge bg-brand-blue-subtle text-primary"></span>
            </div>
            <p className="text-muted fs-5 mb-10"></p>
            
            <div className="card border-0 bg-light rounded-4 p-4 mb-12 shadow-sm">
                <h5 className="font-bold mb-8">About Us</h5>
                <p className="mb-2 text-muted lh-lg">
                    
                </p>
            </div>
            
            <h4 className="font-bold mb-10">Our Services</h4>
            
                <div className="flex flex-wrap -mx-4 g-4 mb-12">
                
                    
                    <div className="w-full md:w-6/12 px-10">
                        <div className="card border-0 shadow-sm rounded-4 h-100 p-4">
                            <div className="flex justify-between align-items-start mb-8">
                                <div>
                                    <h5 className="font-bold mb-4"></h5>
                                    <span className="badge bg-light text-slate-900 mb-6"> mins</span>
                                </div>
                                <div className="fs-5 font-bold text-primary">$</div>
                            </div>
                            <p className="text-muted small mb-10 flex-gflex flex-wrap -mx-4-1"></p>
                            <button className="inline-block px-14 py-8 bg-white text-slate-900 font-bold brutal-border brutal-shadow brutal-hover font-medium w-100" >Book Now</button>
                        </div>
                    </div>
                    
                
                </div>
            
                <div className="card border-0 shadow-sm rounded-4 p-5 text-center text-muted border border-dashed mb-12">
                    <i className="bi bi-calendar2-x fs-1 mb-8 text-secondary"></i>
                    <h5>No services available yet</h5>
                    <p className="mb-2">Please check back later.</p>
                </div>
            

            <h4 className="font-bold mb-10">Our Team</h4>
            
                <div className="flex flex-wrap -mx-4 g-4">
                
                    
                    <div className="w-full md:w-6/12 px-10">
                        <div className="flex items-center p-3 rounded-4 bg-light">
                            
                                <img src="" className="rounded-circle object-fit-cover mr-8" width="60" height="60" alt="" />
                            
                                <div className="rounded-circle bg-secondary text-white flex items-center justify-center mr-8 font-bold" style={{width: '60px', height: '60px'}}>
                                    
                                </div>
                            
                            <div>
                                <h6 className="font-bold mb-2"></h6>
                                <p className="text-muted small mb-2"></p>
                            </div>
                        </div>
                    </div>
                    
                
                </div>
            
                <p className="text-muted">No staff members listed yet.</p>
            
        </div>
        
        <div className="w-full lg:w-4/12 px-10">
            <div className="card border-0 shadow-lg rounded-4 p-4 sticky-top" style={{top: '100px'}}>
                <button className="inline-block px-14 py-8 bg-brand-yellow text-slate-900 font-bold brutal-border brutal-shadow brutal-hover text-xl px-18 py-10 w-100 font-bold shadow-sm mb-10" >Book Appointment</button>
                
                <h6 className="font-bold mb-8 uppercase small text-muted">Business Status</h6>
                <div className="mb-10">
                    
                        <span className="badge bg-brand-green">Active & Accepting Bookings</span>
                    
                        <span className="badge bg-secondary">Temporarily Closed</span>
                    
                </div>

                <h6 className="font-bold mb-8 uppercase small text-muted">Working Hours</h6>
                <ul className="list-unstyled mb-10 text-muted small">
                    
                    <li className="flex justify-between mb-6 pb-2 border-bottom border-light">
                        <span className="font-medium"></span>
                        
                            <span className="text-danger">Closed</span>
                        
                            <span> - </span>
                        
                    </li>
                    
                </ul>                
                <h6 className="font-bold mb-8 uppercase small text-muted">Contact Info</h6>
                <ul className="list-unstyled mb-10">
                    
                    <li className="flex mb-8">
                        <i className="bi bi-geo-alt text-primary mr-8 fs-5"></i>
                        <span className="text-muted">
                            <br />
                            ,  
                        </span>
                    </li>
                    
                    
                    
                    <li className="flex mb-8 items-center">
                        <i className="bi bi-telephone text-primary mr-8 fs-5"></i>
                        <span className="text-muted"></span>
                    </li>
                    
                    
                    
                    <li className="flex mb-8 items-center">
                        <i className="bi bi-envelope text-primary mr-8 fs-5"></i>
                        <span className="text-muted"></span>
                    </li>
                    
                    
                    
                    <li className="flex items-center">
                        <i className="bi bi-globe text-primary mr-8 fs-5"></i>
                        <Link to="" target="_blank" className="text-decoration-none text-muted"></Link>
                    </li>
                    
                </ul>
                
                <div className="flex gap-2">
                    <button className="btn btn-light flex-fill font-medium border shadow-sm" >
                        <i className="bi bi-share mr-6"></i> Share
                    </button>
                    <button className="btn btn-light flex-fill font-medium border shadow-sm text-danger" >
                        <i className="bi bi-flag mr-6"></i> Report
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
        <div className="max-w-7xl mx-auto px-10 sm:px-14 lg:px-18">
            <div className="flex flex-wrap -mx-4 g-4">
                <div className="w-full lg:w-4/12 px-10">
                    <h5 className="font-bold mb-8 fs-3">Booking Hai. 🌶️</h5>
                    <p className="text-muted font-medium fs-5">India's most lit platform to manage your dhanda. Create your booking page and get customers instantly. 100% Swag.</p>
                </div>
                <div className="w-full lg:w-2/12 px-10 w-6/12 px-10">
                    <h6 className="font-bold mb-8">Product</h6>
                    <Link to="#features" className="footer-link">Features</Link>
                    <Link to="#"  className="footer-link">Pricing</Link>
                    <Link to="#"  className="footer-link">Integrations</Link>
                    <Link to="#"  className="footer-link">Changelog</Link>
                </div>
                <div className="w-full lg:w-2/12 px-10 w-6/12 px-10">
                    <h6 className="font-bold mb-8">Resources</h6>
                    <Link to="#"  className="footer-link">Documentation</Link>
                    <Link to="#"  className="footer-link">Help Center</Link>
                    <Link to="#"  className="footer-link">Blog</Link>
                    <Link to="#"  className="footer-link">Community</Link>
                </div>
                <div className="w-full lg:w-2/12 px-10 w-6/12 px-10">
                    <h6 className="font-bold mb-8">Company</h6>
                    <Link to="#"  className="footer-link">About</Link>
                    <Link to="#"  className="footer-link">Customers</Link>
                    <Link to="#"  className="footer-link">Careers</Link>
                    <Link to="#"  className="footer-link">Contact</Link>
                </div>
                <div className="w-full lg:w-2/12 px-10 w-6/12 px-10">
                    <h6 className="font-bold mb-8">Legal</h6>
                    <Link to="#"  className="footer-link">Privacy Policy</Link>
                    <Link to="#"  className="footer-link">Terms of Service</Link>
                </div>
            </div>
            <div className="border-top mt-12 pt-4 text-center text-muted small">
                <p>&copy;  Booking Hai. All rights reserved.</p>
            </div>
        </div>
    </footer>

    {/* Bootstrap JS */}
    
    
    

        </>
    );
};

export default Business;
