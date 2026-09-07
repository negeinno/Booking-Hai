import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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




{/* Hero Section */}
    <section className="hero-section d-flex align-items-center position-relative overflow-hidden" >
        {/* Decorative Background Elements */}
        <div className="position-absolute opacity-25" >🪷</div>
        <div className="position-absolute opacity-25" >✨</div>
        <div className="position-absolute floating-desi" >🛺</div>
        <div className="position-absolute floating-desi" >🍛</div>

        <div className="container text-center py-5" >
            <div className="mb-4">
                <span className="badge bg-primary text-white rounded-0 px-4 py-2 fs-6 border border-dark border-3 shadow-sm" >
                    NAMASTE! 🙏 INDIA'S COOLEST BOOKING APP
                </span>
            </div>
            
            <h1 className="display-2 fw-bold mb-4 text-dark" >
                Book Local Services <br />
                <span >Swag Se.</span> 😎
            </h1>
            
            <p className="lead mb-5 mx-auto fw-bold text-dark" >
                Ditch the calling. Book your salon, gym, panditji, or mehendi artist instantly. No drama, just confirmed bookings. 💯
            </p>
            
            <div className="card border-3 border-dark rounded-0 p-3 mx-auto" >
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
                        <button type="submit" className="btn btn-accent btn-lg fs-5">CHALO 🚀</button>
                    </div>
                </form>
            </div>
            
            <div className="mt-5 fw-bold d-flex flex-wrap justify-content-center gap-3 align-items-center">
                <span className="text-dark bg-warning px-2 py-1 border border-2 border-dark" >🔥 Trending:</span> 
                <a to="?q=Salon" className="btn btn-outline-primary btn-sm rounded-pill fw-bold">✂️ Hair Salon</Link>
                <a to="?q=Mehendi" className="btn btn-outline-primary btn-sm rounded-pill fw-bold">🌿 Mehendi</Link>
                <a to="?q=Astrologer" className="btn btn-outline-primary btn-sm rounded-pill fw-bold">🔮 Astrologer</Link>
                <a to="?q=Gym" className="btn btn-outline-primary btn-sm rounded-pill fw-bold">🏋️ Gym</Link>
            </div>
        </div>
        
        {/* Marquee Divider */}
        <div className="position-absolute bottom-0 start-0 w-100 overflow-hidden border-top border-bottom border-dark border-3 bg-primary py-2" >
            <div className="d-flex whitespace-nowrap text-white fw-bold fs-4 text-uppercase" >
                &nbsp;✨ Desi Services ✨ Instant Booking ✨ No Calling Needed ✨ Verified Professionals ✨ 100% Swag ✨ Desi Services ✨ Instant Booking ✨ No Calling Needed ✨ Verified Professionals ✨ 100% Swag ✨
            </div>
        </div>
        <style>
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        </style>
    </section>

    {/* Location Permission Script */}
    

{/* Features Section */}
<section id="features" className="section-padding bg-white" >
    <div className="container">
        <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-dark text-uppercase" >Kyun Use Karein? 🤔</h2>
            <p className="fs-4 fw-bold text-primary mt-3">Kyunki time is money, boss.</p>
        </div>
        <div className="row g-4">
            <div className="col-md-4">
                <div className="feature-card h-100 text-center p-4 bg-secondary">
                    <div className="feature-icon mx-auto bg-primary text-white mb-4 floating-desi">🗓️</div>
                    <h3 className="fw-bold mb-3 text-uppercase">No Double Booking</h3>
                    <p className="fw-medium text-dark fs-5">Macha, only available slots show up. Tension-free booking for you and your clients.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="feature-card h-100 text-center p-4 bg-secondary">
                    <div className="feature-icon mx-auto bg-warning text-dark mb-4 floating-desi" >💅</div>
                    <h3 className="fw-bold mb-3 text-uppercase">Apna Swag, Apna Page</h3>
                    <p className="fw-medium text-dark fs-5">Customize your page to match your vibe. Upload logos, set colors, look pro.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="feature-card h-100 text-center p-4 bg-secondary">
                    <div className="feature-icon mx-auto bg-success text-white mb-4 floating-desi" >🔔</div>
                    <h3 className="fw-bold mb-3 text-uppercase">Mast Reminders</h3>
                    <p className="fw-medium text-dark fs-5">Clients bhool gaye? We send automated SMS & email reminders so they show up on time.</p>
                </div>
            </div>
        </div>
    </div>
</section>

{/* CTA Section */}
<section className="section-padding text-center border-top border-3 border-dark" >
    <div className="container py-5 position-relative">
        <div className="position-absolute floating-desi" >🎉</div>
        <div className="position-absolute floating-desi" >🚀</div>
        
        <h2 className="mb-4 display-3 fw-bold text-dark text-uppercase" >Business Badhana Hai?</h2>
        <p className="mb-5 text-dark fs-4 fw-bold mx-auto" >Stop using diaries. Upgrade your dhanda to 2026. Join thousands of desi businesses growing online.</p>
        <div className="d-flex justify-content-center gap-4">
            <a to="" className="btn btn-primary btn-lg px-5 py-3 fs-4 border-3 border-dark">Start Free Demo 💥</Link>
            <a to="#features" className="btn btn-outline-primary btn-lg px-5 py-3 fs-4 bg-white border-3 border-dark">Dekho Kaise 👀</Link>
        </div>
    </div>
</section>

<style>
    .hover-bg-light-alpha:hover { background: rgba(255,255,255,0.15); }
    .feature-card { transition: all 0.3s ease; border: 1px solid rgba(0,0,0,0.05); border-radius: 1rem; background: #fff; }
    .feature-card:hover { transform: translateY(-10px); box-shadow: 0 1rem 3rem rgba(0,0,0,0.08); border-color: rgba(0,0,0,0.1); }
</style>


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

export default Home;
