import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen bg-brand-yellow font-space-grotesk flex flex-col md:flex-row">
            {/* Left Side - Branding */}
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center items-start border-b-[4px] md:border-b-0 md:border-r-[4px] border-black">
                <Link to="/" className="text-4xl font-black tracking-tighter mb-12">Booking Hai.</Link>
                <h1 className="text-5xl lg:text-7xl font-black uppercase leading-tight mb-6">
                    Start <br /> Your Journey.
                </h1>
                <p className="text-xl font-bold max-w-md">Login to manage your bookings, customize your page, and grow your dhanda.</p>
                <div className="mt-12 text-6xl transform rotate-12">🚀</div>
            </div>
            
            {/* Right Side - Form */}
            <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center items-center">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-black mb-8 uppercase text-center">Register</h2>
                    
                    <form className="space-y-6">
                        <div>
                            <label className="block font-bold mb-2">Email Address</label>
                            <input 
                                type="email" 
                                className="w-full px-4 py-3 bg-yellow-50 border-[3px] border-black focus:outline-none focus:ring-4 focus:ring-brand-pink/20 brutal-shadow brutal-hover transition-all font-medium"
                                placeholder="boss@bookinghai.com"
                            />
                        </div>
                        <div>
                            <label className="block font-bold mb-2">Password</label>
                            <input 
                                type="password" 
                                className="w-full px-4 py-3 bg-yellow-50 border-[3px] border-black focus:outline-none focus:ring-4 focus:ring-brand-pink/20 brutal-shadow brutal-hover transition-all font-medium"
                                placeholder="••••••••"
                            />
                        </div>
                        
                        <div className="flex justify-between items-center font-bold text-sm">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 border-[2px] border-black accent-brand-pink" />
                                <span>Remember me</span>
                            </label>
                            <Link to="#" className="text-brand-blue hover:underline">Forgot password?</Link>
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
export default Login;
