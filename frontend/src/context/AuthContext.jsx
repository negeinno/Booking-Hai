
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    const [loading, setLoading] = useState(true);

    const loginUser = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/auth/login/', {
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
            window.location.href = '/dashboard';
        } else if (response.status === 403 && data.requires_verification) {
            window.location.href = '/verify-otp?tokens=' + encodeURIComponent(JSON.stringify(data));
            // Actually better to pass through state, but window.location can't do that easily without react-router's navigate
        } else {
            alert(data.error || 'Something went wrong!');
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
