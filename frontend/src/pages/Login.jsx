import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        const result = await loginUser(e);
        if (result && !result.success) {
            setError(result.error);
        }
        setIsLoading(false);
    };
    
    return (
        <div className="min-h-screen bg-brand-yellow font-space-grotesk flex flex-col md:flex-row">
            {/* Left Side - Branding */}
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center items-start border-b-[4px] md:border-b-0 md:border-r-[4px] border-black">
                <Link to="/" className="text-4xl font-black tracking-tighter mb-12">Booking Hai.</Link>
                <h1 className="text-5xl lg:text-7xl font-black uppercase leading-tight mb-6">
                    Welcome <br /> Back, Boss.
                </h1>
                <p className="text-xl font-bold max-w-md">Login to manage your bookings, customize your page, and grow your dhanda.</p>
                <div className="mt-12 text-6xl transform rotate-12">??</div>
            </div>
            
            {/* Right Side - Form */}
            <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center items-center">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-black mb-8 uppercase text-center">Log In</h2>
                    
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block font-bold mb-2">Username or Email Address</label>
                            <input 
                                name="username"
                                type="text" 
                                className="w-full px-4 py-3 bg-yellow-50 border-[3px] border-black focus:outline-none focus:ring-4 focus:ring-brand-pink/20 brutal-shadow brutal-hover transition-all font-medium"
                                placeholder="boss"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-bold mb-2">Password</label>
                            <input 
                                name="password"
                                type="password" 
                                className="w-full px-4 py-3 bg-yellow-50 border-[3px] border-black focus:outline-none focus:ring-4 focus:ring-brand-pink/20 brutal-shadow brutal-hover transition-all font-medium"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        
                        <div className="flex justify-between items-center font-bold text-sm">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 border-[2px] border-black accent-brand-pink" />
                                <span>Remember me</span>
                            </label>
                            <Link to="/forgot-password" className="text-brand-blue hover:underline">Forgot password?</Link>
                        </div>

                        {error && <p className="text-red-600 font-bold text-center">{error}</p>}
                        
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full py-4 bg-black text-white font-black text-xl brutal-shadow hover:-translate-y-1 hover:shadow-lg transition-transform uppercase disabled:opacity-50"
                        >
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </button>
                        
                        {/* Google Auth Button Placeholder */}
                        <button 
                            type="button" 
                            className="w-full mt-4 py-4 bg-white border-[3px] border-black text-black font-black text-xl brutal-shadow hover:-translate-y-1 hover:shadow-lg transition-transform uppercase flex items-center justify-center gap-2"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            Continue with Google
                        </button>
                    </form>
                    
                    <p className="mt-8 text-center font-bold">
                        Don't have an account? <Link to="/register" className="text-brand-pink hover:underline">Get Started</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Login;
