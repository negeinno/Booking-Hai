import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const OTPVerification = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const inputRefs = useRef([]);
    const location = useLocation();
    const navigate = useNavigate();
    
    const searchParams = new URLSearchParams(location.search);
    const requiresVerification = location.state?.requiresVerification || searchParams.has('tokens') || searchParams.has('requires_verification');
    const tokens = location.state?.tokens || (searchParams.get('tokens') ? JSON.parse(decodeURIComponent(searchParams.get('tokens'))) : null);
    
    useEffect(() => {
        if (!requiresVerification) {
             navigate('/login');
        }
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [requiresVerification, navigate]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return;
        
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 5 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text/plain').trim();
        if (/^\d{6}$/.test(pastedData)) {
            const digits = pastedData.split('');
            setOtp(digits);
            if (inputRefs.current[5]) {
                inputRefs.current[5].focus();
            }
        }
    };

    const handleVerify = async (e) => {
        e.preventDefault();
        const otpCode = otp.join('');
        if (otpCode.length !== 6) {
            setError('Please enter a 6-digit OTP');
            return;
        }

        setLoading(true);
        setError('');
        try {
            const tokenToUse = tokens?.access || localStorage.getItem('access') || '';
            const res = await fetch('/api/auth/verify-otp/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenToUse}`
                },
                body: JSON.stringify({ otp: otpCode })
            });
            const data = await res.json();

            if (res.ok) {
                // Auto login logic
                if (tokens) {
                    localStorage.setItem('authTokens', JSON.stringify(tokens));
                }
                // Redirect to dashboard
                window.location.href = '/dashboard';
            } else {
                setError(data.error || 'Invalid OTP');
            }
        } catch (err) {
            setError('Failed to verify OTP');
        }
        setLoading(false);
    };

    const handleResend = async () => {
        try {
            const tokenToUse = tokens?.access || localStorage.getItem('access') || '';
            const res = await fetch('/api/auth/resend-otp/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenToUse}`
                }
            });
            const data = await res.json();
            if (res.ok) {
                setTimeLeft(600);
                alert('OTP sent to your email.');
            } else {
                setError(data.error || 'Failed to resend OTP');
            }
        } catch (err) {
            setError('Failed to resend OTP');
        }
    };

    return (
        <div className="min-h-screen bg-brand-yellow font-space-grotesk flex flex-col md:flex-row">
            {/* Left Side - Branding */}
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center items-start border-b-[4px] md:border-b-0 md:border-r-[4px] border-black">
                <Link to="/" className="text-4xl font-black tracking-tighter mb-12">Booking Hai.</Link>
                <h1 className="text-5xl lg:text-7xl font-black uppercase leading-tight mb-6">
                    Verify Your <br /> Email.
                </h1>
                <p className="text-xl font-bold max-w-md">We need to make sure you're a real human before we let you in.</p>
                <div className="mt-12 text-6xl transform rotate-12">✉️</div>
            </div>
            
            {/* Right Side - Form */}
            <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center items-center">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-black mb-4 uppercase text-center">Enter OTP</h2>
                    <p className="text-center font-bold mb-8">We've sent a 6-digit code to your email.</p>
                    
                    {error && <div className="mb-4 text-red-600 font-bold text-center bg-red-100 p-2 border-[2px] border-red-600">{error}</div>}

                    <form className="space-y-6" onSubmit={handleVerify}>
                        <div className="flex justify-between gap-2" onPaste={handlePaste}>
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    ref={(el) => inputRefs.current[index] = el}
                                    onChange={(e) => handleChange(index, e)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="w-12 h-14 text-center text-2xl font-black bg-yellow-50 border-[3px] border-black focus:outline-none focus:ring-4 focus:ring-brand-pink/20 brutal-shadow brutal-hover transition-all"
                                />
                            ))}
                        </div>

                        <div className="flex justify-between items-center font-bold">
                            <span>Time left: {formatTime(timeLeft)}</span>
                            <button 
                                type="button" 
                                onClick={handleResend}
                                className="text-brand-blue hover:underline"
                            >
                                Resend OTP
                            </button>
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading || timeLeft === 0}
                            className="w-full py-4 bg-black text-white font-black text-xl brutal-shadow hover:-translate-y-1 hover:shadow-lg transition-transform uppercase disabled:opacity-50"
                        >
                            {loading ? 'Verifying...' : 'Verify Email'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OTPVerification;
