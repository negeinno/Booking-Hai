import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RoleSelection = () => {
    const navigate = useNavigate();

    const selectRole = (role) => {
        // We will pass the role via query parameters or state to the next screens
        navigate('/register?role=' + role);
    };

    return (
        <div className="min-h-screen bg-brand-yellow font-space-grotesk flex flex-col justify-center items-center p-4">
            <div className="max-w-4xl w-full">
                <Link to="/" className="text-4xl font-black tracking-tighter mb-12 block text-center">Booking Hai.</Link>
                
                <h1 className="text-5xl md:text-7xl font-black uppercase text-center mb-12">
                    Who are you?
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Owner Card */}
                    <button 
                        onClick={() => selectRole('business_owner')}
                        className="bg-white p-10 border-[4px] border-black brutal-shadow brutal-hover transition-transform flex flex-col items-center text-center group"
                    >
                        <div className="text-8xl mb-6 group-hover:scale-110 transition-transform">??</div>
                        <h2 className="text-4xl font-black uppercase mb-4">Business Owner</h2>
                        <p className="text-xl font-bold">I want to manage my shop, take appointments, and grow my business.</p>
                    </button>
                    
                    {/* Customer Card */}
                    <button 
                        onClick={() => selectRole('customer')}
                        className="bg-white p-10 border-[4px] border-black brutal-shadow brutal-hover transition-transform flex flex-col items-center text-center group"
                    >
                        <div className="text-8xl mb-6 group-hover:scale-110 transition-transform">?????</div>
                        <h2 className="text-4xl font-black uppercase mb-4">Customer</h2>
                        <p className="text-xl font-bold">I want to find shops, book appointments, and manage my visits.</p>
                    </button>
                </div>
                
                <p className="mt-12 text-center font-bold text-xl">
                    Already have an account? <Link to="/login" className="text-brand-pink hover:underline">Log In Here</Link>
                </p>
            </div>
        </div>
    );
};

export default RoleSelection;
