import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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




{/* Hero Section */}
    <section className="hero-section d-flex align-items-center position-relative overflow-hidden" style={{minHeight: '85vh', background: 'var(--bg-secondary)'}}>
        {/* Decorative Background Elements */}
        <div className="position-absolute opacity-25" style={{top: '-5%', left: '-5%', fontSize: '20rem', transform: 'rotate(15deg)'}}>ðŸª·</div>
        <div className="position-absolute opacity-25" style={{bottom: '-10%', right: '-5%', fontSize: '15rem', transform: 'rotate(-15deg)'}}>âœ¨</div>
        <div className="position-absolute floating-desi" style={{top: '20%', right: '10%', fontSize: '4rem'}}>ðŸ›º</div>
        <div className="position-absolute floating-desi" style={{bottom: '20%', left: '10%', fontSize: '3rem', animationDelay: '2s'}}>ðŸ›</div>

        <div className="container text-center py-5 pb-5 mb-5" style={{position: 'relative', zIndex: '2'}}>
            <div className="mb-4">
                <span className="badge bg-primary text-white rounded-0 px-4 py-2 fs-6 border border-dark border-3 shadow-sm" style={{transform: 'rotate(-2deg)', display: 'inline-block'}}>
                    NAMASTE! ðŸ™ INDIA'S COOLEST BOOKING APP
                </span>
            </div>
            
            <h1 className="display-2 fw-bold mb-4 text-dark" style={{textTransform: 'uppercase'}}>
                Book Local Services <br />
                <span style={{color: 'var(--primary-color)', webkitTextStroke: '1px var(--text-main)', textShadow: '4px 4px 0px var(--text-main)'}}>Swag Se.</span> ðŸ˜Ž
            </h1>
            
            <p className="lead mb-5 mx-auto fw-bold text-dark" style={{maxWidth: '600px', fontSize: '1.3rem'}}>
                Ditch the calling. Book your salon, gym, panditji, or mehendi artist instantly. No drama, just confirmed bookings. ðŸ’¯
            </p>
            
            <div className="card border-3 border-dark rounded-0 p-3 mx-auto" style={{maxWidth: '850px', background: 'white', boxShadow: '8px 8px 0px var(--text-main)'}}>
                <form action="" method="get" className="row g-2 align-items-center">
                    <div className="col-md-5">
                        <div className="input-group input-group-lg">
                            <span className="input-group-text border-end-0 bg-white"><i className="bi bi-search text-dark fw-bold"></i></span>
                            <input type="text" name="q" className="form-control border-start-0 fs-5" placeholder="Kya chahiye? (e.g. Salon)" value="" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="input-group input-group-lg">
                            <span className="input-group-text border-end-0 bg-white"><i className="bi bi-geo-alt text-dark fw-bold"></i></span>
                            <input type="text" name="loc" id="locationInput" className="form-control border-start-0 border-end-0 fs-5" placeholder="Kahan par?" value="" />
                            <button type="button" className="btn btn-outline-dark border-start-0 border-top-3 border-bottom-3 border-end-3 bg-white" id="useLocationBtn" title="Use my current location">
                                <i className="bi bi-crosshair"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-2 d-grid">
                        <button type="submit" className="btn btn-accent btn-lg fs-5">CHALO ðŸš€</button>
                    </div>
                </form>
            </div>
            
            <div className="mt-5 fw-bold d-flex flex-wrap justify-content-center gap-3 align-items-center">
                <span className="text-dark bg-warning px-2 py-1 border border-2 border-dark" style={{transform: 'rotate(-3deg)'}}>ðŸ”¥ Trending:</span> 
                <Link to="?q=Salon" className="btn btn-outline-primary btn-sm rounded-pill fw-bold">âœ‚ï¸ Hair Salon</Link>
                <Link to="?q=Mehendi" className="btn btn-outline-primary btn-sm rounded-pill fw-bold">ðŸŒ¿ Mehendi</Link>
                <Link to="?q=Astrologer" className="btn btn-outline-primary btn-sm rounded-pill fw-bold">ðŸ”® Astrologer</Link>
                <Link to="?q=Gym" className="btn btn-outline-primary btn-sm rounded-pill fw-bold">ðŸ‹ï¸ Gym</Link>
            </div>
        </div>
        
        {/* Marquee Divider */}
        <div className="position-absolute bottom-0 start-0 w-100 overflow-hidden border-top border-bottom border-dark border-3 bg-primary py-2" style={{zIndex: '10'}}>
            <div className="d-flex whitespace-nowrap text-white fw-bold fs-4 text-uppercase" style={{whiteSpace: 'nowrap', animation: 'scroll 20s linear infinite'}}>
                &nbsp;âœ¨ Desi Services âœ¨ Instant Booking âœ¨ No Calling Needed âœ¨ Verified Professionals âœ¨ 100% Swag âœ¨ Desi Services âœ¨ Instant Booking âœ¨ No Calling Needed âœ¨ Verified Professionals âœ¨ 100% Swag âœ¨
            </div>
        </div>
        {/*  */}
    </section>

    {/* Location Permission Script */}
    

{/* Features Section */}
<section id="features" className="section-padding bg-white" style={{paddingTop: '5rem'}}>
    <div className="container">
        <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-dark text-uppercase" style={{webkitTextStroke: '1px var(--text-main)', textShadow: '3px 3px 0px var(--accent-color)'}}>Kyun Use Karein? ðŸ¤”</h2>
            <p className="fs-4 fw-bold text-primary mt-3">Kyunki time is money, boss.</p>
        </div>
        <div className="row g-4">
            <div className="col-md-4">
                <div className="feature-card h-100 text-center p-4 bg-secondary">
                    <div className="feature-icon mx-auto bg-primary text-white mb-4 floating-desi">ðŸ—“ï¸</div>
                    <h3 className="fw-bold mb-3 text-uppercase">No Double Booking</h3>
                    <p className="fw-medium text-dark fs-5">Macha, only available slots show up. Tension-free booking for you and your clients.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="feature-card h-100 text-center p-4 bg-secondary">
                    <div className="feature-icon mx-auto bg-warning text-dark mb-4 floating-desi" style={{animationDelay: '0.5s'}}>ðŸ’…</div>
                    <h3 className="fw-bold mb-3 text-uppercase">Apna Swag, Apna Page</h3>
                    <p className="fw-medium text-dark fs-5">Customize your page to match your vibe. Upload logos, set colors, look pro.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="feature-card h-100 text-center p-4 bg-secondary">
                    <div className="feature-icon mx-auto bg-success text-white mb-4 floating-desi" style={{animationDelay: '1s'}}>ðŸ””</div>
                    <h3 className="fw-bold mb-3 text-uppercase">Mast Reminders</h3>
                    <p className="fw-medium text-dark fs-5">Clients bhool gaye? We send automated SMS & email reminders so they show up on time.</p>
                </div>
            </div>
        </div>
    </div>
</section>

{/* CTA Section */}
<section className="section-padding text-center border-top border-3 border-dark" style={{backgroundColor: 'var(--accent-color)'}}>
    <div className="container py-5 position-relative">
        <div className="position-absolute floating-desi" style={{top: '10%', left: '10%', fontSize: '4rem'}}>ðŸŽ‰</div>
        <div className="position-absolute floating-desi" style={{bottom: '10%', right: '10%', fontSize: '4rem', animationDelay: '1.5s'}}>ðŸš€</div>
        
        <h2 className="mb-4 display-3 fw-bold text-dark text-uppercase" style={{textShadow: '4px 4px 0px white'}}>Business Badhana Hai?</h2>
        <p className="mb-5 text-dark fs-4 fw-bold mx-auto" style={{maxWidth: '700px'}}>Stop using diaries. Upgrade your dhanda to 2026. Join thousands of desi businesses growing online.</p>
        <div className="d-flex justify-content-center gap-4">
            <Link to="" className="btn btn-primary btn-lg px-5 py-3 fs-4 border-3 border-dark">Start Free Demo ðŸ’¥</Link>
            <Link to="#features" className="btn btn-outline-primary btn-lg px-5 py-3 fs-4 bg-white border-3 border-dark">Dekho Kaise ðŸ‘€</Link>
        </div>
    </div>
</section>

{/*  */}


    <main>
        
        
    </main>

    {/* Footer */}
    <footer>
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-4">
                    <h5 className="fw-bold mb-3 fs-3">Booking Hai. ðŸŒ¶ï¸</h5>
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

export default Home;
