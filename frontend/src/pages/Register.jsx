import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { API_BASE } from '../config/api';


const Register = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const role = queryParams.get('role') || 'customer';
    const navigate = useNavigate();
    const [step, setStep] = useState('register'); // 'register' or 'otp'
    const [formData, setFormData] = useState({
        username: '', fullName: '', email: '', password: '', confirmPassword: '', termsAccepted: false
    });
    const [otpCode, setOtpCode] = useState('');
    const [token, setToken] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        if (!formData.termsAccepted) {
            setError('Please accept the Terms and Privacy Policy');
            return;
        }
        
        setIsLoading(true);
        const nameParts = formData.fullName.trim().split(' ');
        const first_name = nameParts[0] || '';
        const last_name = nameParts.slice(1).join(' ') || '';

        const payload = {
            username: formData.username,
            email: formData.email,
            role: role,
            password: formData.password,
            first_name,
            last_name
        };

        try {
            const response = await fetch(API_BASE + '/api/v1/auth/register/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (response.ok || response.status === 201) {
                if (data.debug_otp) { alert("DEBUG MODE - Your OTP is: " + data.debug_otp); } navigate('/verify-otp', { state: { requiresVerification: true, tokens: data } });
            } else {
                if (data.error) setError(data.error);
                else if (data.detail) setError(data.detail);
                else if (typeof data === 'object') {
                    // Extract the first error message from the object
                    const firstKey = Object.keys(data)[0];
                    if (Array.isArray(data[firstKey])) {
                        setError(data[firstKey][0]);
                    } else {
                        setError(data[firstKey]);
                    }
                } else {
                    setError('Registration failed. Please try again.');
                }
            }
        } catch (err) {
            setError('An error occurred during signup.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-brand-yellow font-space-grotesk flex flex-col md:flex-row">
            {/* Left Side - Branding */}
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center items-start border-b-[4px] md:border-b-0 md:border-r-[4px] border-black">
                <Link to="/" className="text-4xl font-black tracking-tighter mb-12">Booking Hai.</Link>
                <h1 className="text-5xl lg:text-7xl font-black uppercase leading-tight mb-6">
                    {role === 'business_owner' ? "Grow Your Business." : "Start Your Journey."}
                </h1>
                <p className="text-xl font-bold max-w-md">{role === 'business_owner' ? "Create an owner account to manage your shop, staff, and appointments." : "Create an account to discover shops and book your appointments."}</p>
                <div className="mt-12 text-6xl transform rotate-12">??</div>
            </div>
            
            {/* Right Side - Form */}
            <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center items-center">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-black mb-8 uppercase text-center">
                        Register
                    </h2>
                    
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block font-bold mb-2">Username</label>
                            <input 
                                type="text" 
                                name="username"
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-yellow-50 border-[3px] border-black focus:outline-none focus:ring-4 focus:ring-brand-pink/20 brutal-shadow brutal-hover transition-all font-medium"
                                placeholder="boss"
                            />
                        </div>
                        <div>
                            <label className="block font-bold mb-2">Full Name</label>
                            <input 
                                type="text" 
                                name="fullName"
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-yellow-50 border-[3px] border-black focus:outline-none focus:ring-4 focus:ring-brand-pink/20 brutal-shadow brutal-hover transition-all font-medium"
                                placeholder="Anmol Kumar"
                            />
                        </div>
                        <div>
                            <label className="block font-bold mb-2">Email Address</label>
                            <input 
                                type="email" 
                                name="email"
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-yellow-50 border-[3px] border-black focus:outline-none focus:ring-4 focus:ring-brand-pink/20 brutal-shadow brutal-hover transition-all font-medium"
                                placeholder="anmol@example.com"
                            />
                        </div>
                        <div>
                            <label className="block font-bold mb-2">Password</label>
                            <input 
                                type="password" 
                                name="password"
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-yellow-50 border-[3px] border-black focus:outline-none focus:ring-4 focus:ring-brand-pink/20 brutal-shadow brutal-hover transition-all font-medium"
                                placeholder="••••••••"
                            />
                        </div>
                        <div>
                            <label className="block font-bold mb-2">Confirm Password</label>
                            <input 
                                type="password" 
                                name="confirmPassword"
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-yellow-50 border-[3px] border-black focus:outline-none focus:ring-4 focus:ring-brand-pink/20 brutal-shadow brutal-hover transition-all font-medium"
                                placeholder="••••••••"
                            />
                        </div>
                        
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center space-x-2 pt-2">
                                <input 
                                    type="checkbox" 
                                    name="termsAccepted"
                                    id="termsAccepted"
                                    onChange={handleChange}
                                    className="w-5 h-5 border-[2px] border-black text-brand-pink focus:ring-brand-pink/20 cursor-pointer"
                                />
                                <span className="text-sm font-bold">
                                    I accept the <Link to="/terms" className="text-brand-pink hover:underline">Terms</Link> and <Link to="/privacy" className="text-brand-pink hover:underline">Privacy Policy</Link>
                                </span>
                            </div>

                            {error && <p className="text-red-600 font-bold text-center">{error}</p>}
                            <button 
                                type="submit" 
                                disabled={isLoading}
                                className="w-full py-3 bg-black text-white font-black text-lg brutal-shadow hover:-translate-y-1 hover:shadow-lg transition-transform uppercase mt-2 disabled:opacity-50"
                            >
                                {isLoading ? 'Sending OTP...' : 'Send OTP & Sign Up'}
                            </button>
                            
                            <div className="relative flex items-center justify-center my-4">
                                <div className="border-t-[2px] border-black w-full"></div>
                                <span className="bg-white px-3 font-bold absolute text-sm">OR</span>
                            </div>

                            <button 
                                type="button"
                                className="w-full py-3 bg-white border-[3px] border-black text-black font-black text-lg brutal-shadow hover:-translate-y-1 hover:bg-gray-50 transition-transform uppercase flex items-center justify-center gap-2"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                                Continue with Google
                            </button>
                        </div>
                    </form>
                    
                    <p className="mt-8 text-center font-bold">
                        Already have an account? <Link to="/login" className="text-brand-pink hover:underline">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;


