import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '', email: '', password: ''
    });

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
            navigate('/login');
        } else {
            alert('Signup failed');
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
                    <h2 className="text-3xl font-black mb-8 uppercase text-center">Register</h2>
                    
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
                    
                    <p className="mt-8 text-center font-bold">
                        Already have an account? <Link to="/login" className="text-brand-pink hover:underline">Log In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Register;
