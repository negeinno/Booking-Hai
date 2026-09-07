import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-yellow-50 overflow-hidden font-space-grotesk">
            
            {/* Navigation */}
            <nav className="w-full border-b-[3px] border-black bg-white z-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-3xl font-black tracking-tighter">Booking Hai.</Link>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <Link to="#features" className="text-lg font-bold hover:text-brand-blue transition-colors">Features</Link>
                            <Link to="#" className="text-lg font-bold hover:text-brand-blue transition-colors">Directory</Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link to="/login" className="hidden md:inline-block px-6 py-2 bg-white text-black font-bold brutal-border brutal-shadow brutal-hover">Log in</Link>
                            <Link to="/register" className="inline-block px-6 py-2 bg-brand-blue text-white font-bold brutal-border brutal-shadow brutal-hover">Get Started</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48">
                {/* Floating Emojis */}
                <div className="absolute top-10 left-10 text-6xl transform -rotate-12 animate-bounce hidden md:block">🌸</div>
                <div className="absolute bottom-20 right-10 text-7xl transform rotate-12 animate-pulse hidden md:block">🛺</div>
                <div className="absolute top-1/3 right-20 text-5xl transform rotate-45 hidden lg:block">✨</div>

                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-tight mb-6">
                        Book Local Services <br />
                        <span className="text-brand-pink relative inline-block">
                            <span className="relative z-10">Swag Se.</span>
                            <span className="absolute bottom-2 left-0 w-full h-4 bg-brand-yellow -z-10 transform -rotate-2"></span>
                        </span> 😎
                    </h1>
                    
                    <p className="text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-12 text-slate-800">
                        Ditch the calling. Book your salon, gym, panditji, or mehendi artist instantly. No drama, just confirmed bookings. 💯
                    </p>

                    {/* Search Bar */}
                    <div className="bg-white p-2 md:p-3 brutal-border brutal-shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row gap-3 mb-8">
                        <input 
                            type="text" 
                            placeholder="Kya chahiye? (e.g. Salon)" 
                            className="flex-1 px-4 py-4 text-lg font-bold bg-slate-50 border-2 border-slate-200 focus:border-black focus:outline-none placeholder-slate-400"
                        />
                        <input 
                            type="text" 
                            placeholder="Kahan par?" 
                            className="flex-1 px-4 py-4 text-lg font-bold bg-slate-50 border-2 border-slate-200 focus:border-black focus:outline-none placeholder-slate-400"
                        />
                        <button className="px-8 py-4 bg-brand-yellow text-black font-black text-xl border-2 border-black hover:bg-black hover:text-white transition-colors uppercase whitespace-nowrap">
                            Chalo 🚀
                        </button>
                    </div>

                    {/* Trending Chips */}
                    <div className="flex flex-wrap justify-center items-center gap-3">
                        <span className="bg-brand-yellow px-3 py-1 font-black text-sm uppercase brutal-border transform -rotate-2">🔥 Trending</span>
                        <Link to="/?q=salon" className="bg-white px-4 py-2 font-bold text-sm brutal-border brutal-hover rounded-full">✂️ Hair Salon</Link>
                        <Link to="/?q=mehendi" className="bg-white px-4 py-2 font-bold text-sm brutal-border brutal-hover rounded-full">🌿 Mehendi</Link>
                        <Link to="/?q=astrologer" className="bg-white px-4 py-2 font-bold text-sm brutal-border brutal-hover rounded-full">🔮 Astrologer</Link>
                    </div>
                </div>
            </section>

            {/* Marquee */}
            <div className="w-full bg-brand-blue border-y-[4px] border-black py-4 overflow-hidden relative flex z-20">
                <div className="whitespace-nowrap text-white font-black text-2xl md:text-4xl uppercase tracking-wider marquee-animation flex">
                    <span>✨ INSTANT BOOKING ✨ NO CALLING NEEDED ✨ VERIFIED PROFESSIONALS ✨ 100% SWAG ✨ DESI SERVICES</span>
                    <span className="ml-4">✨ INSTANT BOOKING ✨ NO CALLING NEEDED ✨ VERIFIED PROFESSIONALS ✨ 100% SWAG ✨ DESI SERVICES</span>
                </div>
            </div>

            {/* Features Section */}
            <section id="features" className="py-24 bg-white relative z-10 border-b-[4px] border-black">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">Kyun Use Karein? 🧐</h2>
                        <p className="text-2xl font-bold text-brand-blue">Kyunki time is money, boss.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-slate-100 brutal-border brutal-shadow-lg p-6 flex flex-col h-full rounded-2xl relative mt-8">
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-brand-blue brutal-border rounded-full flex items-center justify-center text-3xl">🗓️</div>
                            <h3 className="text-2xl font-black uppercase text-center mt-8 mb-4">No Double Booking</h3>
                            <p className="text-lg font-medium text-center flex-grow text-slate-700">Macha, only available slots show up. Tension-free booking for you and your clients.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-slate-100 brutal-border brutal-shadow-lg p-6 flex flex-col h-full rounded-2xl relative mt-8">
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-brand-yellow brutal-border rounded-full flex items-center justify-center text-3xl">💅</div>
                            <h3 className="text-2xl font-black uppercase text-center mt-8 mb-4">Apna Swag, Apna Page</h3>
                            <p className="text-lg font-medium text-center flex-grow text-slate-700">Customize your page to match your vibe. Upload logos, set colors, look pro.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-slate-100 brutal-border brutal-shadow-lg p-6 flex flex-col h-full rounded-2xl relative mt-8">
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-brand-green brutal-border rounded-full flex items-center justify-center text-3xl">🔔</div>
                            <h3 className="text-2xl font-black uppercase text-center mt-8 mb-4">Mast Reminders</h3>
                            <p className="text-lg font-medium text-center flex-grow text-slate-700">Clients bhool gaye? We send automated SMS & email reminders so they show up on time.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 py-16 text-white border-t-[8px] border-brand-pink">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-black uppercase mb-8 text-brand-yellow">Booking Hai.</h2>
                    <div className="flex flex-wrap justify-center gap-6 font-bold text-lg">
                        <Link to="#" className="hover:text-brand-pink transition-colors">Privacy</Link>
                        <Link to="#" className="hover:text-brand-pink transition-colors">Terms</Link>
                        <Link to="#" className="hover:text-brand-pink transition-colors">Contact</Link>
                    </div>
                    <p className="mt-12 font-medium text-slate-400">© 2026 Booking Hai. Crafted with swag in India.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
