import React, { createContext, useState, useEffect } from 'react';
import { API_BASE } from '../config/api';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    const [loading, setLoading] = useState(true);

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(API_BASE + '/api/v1/auth/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'username': e.target.username.value, 'password': e.target.password.value})
            });
            const data = await response.json();

            if (response.status === 200) {
                setAuthTokens(data);
                setUser(data.user);
                localStorage.setItem('authTokens', JSON.stringify(data));
                if (data.user.role === 'business_owner') { window.location.href = '/owner-dashboard'; } else { window.location.href = '/customer-dashboard'; }
                return { success: true };
            } else if (response.status === 403 && data.requires_verification) {
                return { success: false, error: 'Please verify your email before logging in. Check your signup email for the OTP.' };
            } else {
                return { success: false, error: data.error || 'Invalid Credentials' };
            }
        } catch (err) {
            return { success: false, error: 'Network error. Please try again.' };
        }
    }

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        window.location.href = '/login';
    }

    const contextData = {
        user: user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
    }

    useEffect(()=> {
        setLoading(false);
    }, [authTokens, loading]);

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}

