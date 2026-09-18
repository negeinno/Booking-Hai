import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState('register'); // 'register' or 'otp'
    const [formData, setFormData] = useState({
        username: '', email: '', password: ''
    });
    const [otpCode, setOtpCode] = useState('');
    const [token, setToken] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/auth/register/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        if (response.status === 201) {
            const data = await response.json();
            setToken(data.access);
            setStep('otp');
        } else {
            alert('Signup failed');
        }
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/auth/verify-otp/', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ otp: otpCode })
        });
        if (response.ok) {
            navigate('/login');
        } else {
            alert('Invalid OTP');
        }
    };

    return (
        <div className="min-h-screen bg-brand-yellow font-space-grotesk flex flex-col md:flex-row">
            {/* Left Side - Branding */}
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center items-start border-b-[4px] md:border-b-0 md:border-r-[4px] border-black">
                <Link to="/" className="text-4xl font-black tracking-tighter mb-12">Booking Hai.</Link>
                <h1 className="text-5xl lg:text-7xl font-black uppercase leading-tight mb-6">
                    Start <br /> Your Journey.
                </h1>
                <p className="text-xl font-bold max-w-md">Create an account to manage your bookings, customize your page, and grow your dhanda.</p>
                <div className="mt-12 text-6xl transform rotate-12">🚀</div>
            </div>
            
            {/* Right Side - Form */}
            <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center items-center">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-black mb-8 uppercase text-center">
                        {step === 'register' ? 'Register' : 'Verify Email'}
                    </h2>
                    
                    {step === 'register' ? (
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block font-bold mb-2">Username</label>
                                <input 
                                    name="username"
                                    type="text" 
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-yellow-50 border-[3px] border-black focus:outline-none focus:ring-4 focus:ring-brand-pink/20 brutal-shadow brutal-hover transition-all font-medium"
                                    placeholder="boss123"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-bold mb-2">Email Address</label>
                                <input 
                                    name="email"
                                    type="email" 
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-yellow-50 border-[3px] border-black focus:outline-none focus:ring-4 focus:ring-brand-pink/20 brutal-shadow brutal-hover transition-all font-medium"
                                    placeholder="boss@bookinghai.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-bold mb-2">Password</label>
                                <input 
                                    name="password"
                                    type="password" 
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-yellow-50 border-[3px] border-black focus:outline-none focus:ring-4 focus:ring-brand-pink/20 brutal-shadow brutal-hover transition-all font-medium"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="w-full py-4 bg-black text-white font-black text-xl brutal-shadow hover:-translate-y-1 hover:shadow-lg transition-transform uppercase"
                            >
                                Sign Up
                            </button>
                        </form>
                    ) : (
                        <form className="space-y-6" onSubmit={handleOtpSubmit}>
                            <p className="font-bold text-center mb-4 text-gray-700">
                                We've sent a 6-digit code to your email.
                            </p>
                            <div>
                                <label className="block font-bold mb-2 text-center">OTP Code</label>
                                <input 
                                    name="otp"
                                    type="text" 
                                    value={otpCode}
                                    onChange={(e) => setOtpCode(e.target.value)}
                                    maxLength="6"
                                    className="w-full text-center tracking-widest text-2xl px-4 py-3 bg-yellow-50 border-[3px] border-black focus:outline-none focus:ring-4 focus:ring-brand-pink/20 brutal-shadow brutal-hover transition-all font-bold"
                                    placeholder="123456"
                                    required
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="w-full py-4 bg-black text-white font-black text-xl brutal-shadow hover:-translate-y-1 hover:shadow-lg transition-transform uppercase"
                            >
                                Verify OTP
                            </button>
                        </form>
                    )}
                    
                    {step === 'register' && (
                        <p className="mt-8 text-center font-bold">
                            Already have an account? <Link to="/login" className="text-brand-pink hover:underline">Log In</Link>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Register;
