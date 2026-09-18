import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const OwnerDashboard = () => {
    const { user, logoutUser } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gray-50 font-space-grotesk">
            <nav className="bg-white border-b-4 border-black p-4 flex justify-between items-center">
                <h1 className="text-2xl font-black">Booking Hai. <span className="text-brand-pink">Business</span></h1>
                <div className="flex gap-4 items-center">
                    <span className="font-bold">Boss: {user?.username}</span>
                    <button onClick={logoutUser} className="bg-black text-white px-4 py-2 font-bold brutal-shadow hover:translate-y-1 transition-transform">Logout</button>
                </div>
            </nav>
            <div className="p-8 max-w-6xl mx-auto">
                <h2 className="text-4xl font-black uppercase mb-8">Dashboard Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-brand-yellow p-6 border-4 border-black brutal-shadow">
                        <h3 className="text-2xl font-black">Total Bookings</h3>
                        <p className="text-5xl font-bold mt-4">24</p>
                    </div>
                    <div className="bg-brand-blue p-6 border-4 border-black brutal-shadow text-white">
                        <h3 className="text-2xl font-black">Revenue</h3>
                        <p className="text-5xl font-bold mt-4">,200</p>
                    </div>
                    <div className="bg-brand-pink p-6 border-4 border-black brutal-shadow text-white">
                        <h3 className="text-2xl font-black">Customers</h3>
                        <p className="text-5xl font-bold mt-4">15</p>
                    </div>
                </div>
                
                <div className="mt-12 bg-white border-4 border-black p-6 brutal-shadow">
                    <h3 className="text-2xl font-black mb-4">Your Shops</h3>
                    <p className="font-bold">You haven't set up any shops yet. <Link to="/business/new" className="text-brand-pink hover:underline">Create one now.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default OwnerDashboard;
