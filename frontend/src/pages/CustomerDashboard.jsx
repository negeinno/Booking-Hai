import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { API_BASE } from '../config/api';

const CustomerDashboard = () => {
    const { user, logoutUser, authTokens } = useContext(AuthContext);
    const [shops, setShops] = useState([]);
    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchShops = async () => {
        setLoading(true);
        try {
            const queryParams = new URLSearchParams();
            if (search) queryParams.append('q', search);
            if (location) queryParams.append('location', location);
            
            const res = await fetch(API_BASE + '/api/v1/shops/search/?' + queryParams.toString(), {
                headers: { 'Authorization': 'Bearer ' + authTokens?.access }
            });
            if (res.ok) {
                const data = await res.json();
                setShops(data.results || data); // depending on pagination
            }
        } catch (e) {
            console.error('Failed to fetch shops', e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchShops();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 font-space-grotesk">
            <nav className="bg-white border-b-4 border-black p-4 flex justify-between items-center">
                <h1 className="text-2xl font-black">Booking Hai.</h1>
                <div className="flex gap-4 items-center">
                    <span className="font-bold">Hi, {user?.first_name || user?.username}</span>
                    <button onClick={logoutUser} className="bg-black text-white px-4 py-2 font-bold brutal-shadow hover:translate-y-1 transition-transform">Logout</button>
                </div>
            </nav>
            
            <div className="bg-brand-yellow border-b-4 border-black p-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">Find & Book Shops Near You</h2>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input 
                            type="text" 
                            placeholder="Search by name or category (e.g. Salon)"
                            className="flex-1 p-4 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-brand-pink/20"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <input 
                            type="text" 
                            placeholder="Location (e.g. Delhi)"
                            className="flex-1 p-4 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-brand-pink/20"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <button 
                            onClick={fetchShops}
                            className="bg-black text-white px-8 py-4 font-black uppercase text-xl brutal-shadow hover:-translate-y-1 transition-transform"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-8 max-w-6xl mx-auto">
                <h3 className="text-2xl font-black uppercase mb-6">Available Shops</h3>
                
                {loading ? (
                    <p className="font-bold text-xl">Loading shops...</p>
                ) : shops.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {shops.map(shop => (
                            <div key={shop.id} className="bg-white border-4 border-black brutal-shadow p-6 flex flex-col">
                                <div className="mb-4">
                                    <span className="bg-brand-pink text-white text-xs font-black uppercase px-2 py-1 mb-2 inline-block">{shop.category_name}</span>
                                    <h4 className="text-2xl font-black truncate">{shop.name}</h4>
                                    <p className="font-medium text-gray-600 line-clamp-2 mt-2">{shop.short_description}</p>
                                </div>
                                <div className="mt-auto pt-4 border-t-2 border-black/10">
                                    <p className="font-bold text-sm mb-4">?? {shop.locations?.[0]?.city || 'Location unavailable'}</p>
                                    <button className="w-full bg-brand-blue text-white py-3 font-black uppercase border-2 border-black hover:bg-black transition-colors">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="font-bold text-xl">No shops found matching your criteria. Try adjusting your search.</p>
                )}
            </div>
        </div>
    );
};

export default CustomerDashboard;
