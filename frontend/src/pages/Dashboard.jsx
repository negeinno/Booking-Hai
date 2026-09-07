import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-space-grotesk flex flex-col md:flex-row">
            
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-black text-white border-r-[4px] border-black md:min-h-screen flex flex-col">
                <div className="p-6 border-b-[3px] border-slate-800">
                    <Link to="/" className="text-2xl font-black tracking-tighter text-brand-yellow">Booking Hai.</Link>
                </div>
                <nav className="flex-1 p-4 space-y-2 font-bold text-lg">
                    <Link to="/dashboard" className="block px-4 py-3 bg-brand-blue text-white border-[3px] border-transparent rounded-lg">Home</Link>
                    <Link to="#" className="block px-4 py-3 hover:bg-slate-800 border-[3px] border-transparent hover:border-brand-pink transition-colors rounded-lg">Bookings</Link>
                    <Link to="#" className="block px-4 py-3 hover:bg-slate-800 border-[3px] border-transparent hover:border-brand-pink transition-colors rounded-lg">Services</Link>
                    <Link to="#" className="block px-4 py-3 hover:bg-slate-800 border-[3px] border-transparent hover:border-brand-pink transition-colors rounded-lg">Settings</Link>
                </nav>
                <div className="p-4 border-t-[3px] border-slate-800">
                    <Link to="/" className="block px-4 py-3 text-red-400 font-bold hover:bg-slate-800 rounded-lg">Log Out</Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white border-b-[4px] border-black p-6 flex justify-between items-center z-10">
                    <h1 className="text-2xl font-black uppercase">Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <span className="font-bold hidden md:inline-block">Hello, Boss!</span>
                        <div className="w-12 h-12 bg-brand-pink brutal-border rounded-full flex items-center justify-center font-black text-xl text-white">B</div>
                    </div>
                </header>
                
                {/* Dashboard Widgets */}
                <div className="p-6 md:p-10 flex-1 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-brand-yellow brutal-border brutal-shadow p-6">
                            <h3 className="font-bold text-lg mb-2">Total Bookings</h3>
                            <p className="text-5xl font-black">124</p>
                        </div>
                        <div className="bg-brand-green brutal-border brutal-shadow p-6 text-white">
                            <h3 className="font-bold text-lg mb-2">Revenue</h3>
                            <p className="text-5xl font-black">₹45K</p>
                        </div>
                        <div className="bg-brand-blue brutal-border brutal-shadow p-6 text-white">
                            <h3 className="font-bold text-lg mb-2">Profile Views</h3>
                            <p className="text-5xl font-black">892</p>
                        </div>
                    </div>
                    
                    <div className="bg-white brutal-border brutal-shadow-lg p-8">
                        <h2 className="text-2xl font-black uppercase mb-6 border-b-[3px] border-black pb-4">Recent Bookings</h2>
                        <div className="space-y-4">
                            {[1,2,3].map(i => (
                                <div key={i} className="flex justify-between items-center p-4 bg-slate-50 brutal-border hover:bg-brand-yellow/10 transition-colors">
                                    <div>
                                        <p className="font-bold text-lg">Rahul Kumar</p>
                                        <p className="text-slate-600 font-medium">Haircut & Styling • Tomorrow, 10:00 AM</p>
                                    </div>
                                    <button className="px-4 py-2 bg-black text-white font-bold brutal-border brutal-hover">View</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
export default Dashboard;
