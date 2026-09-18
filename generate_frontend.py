import os

os.makedirs('frontend/src/context', exist_ok=True)
os.makedirs('frontend/src/pages/auth', exist_ok=True)

auth_context = '''
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
        } else {
            alert('Something went wrong!');
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
'''
with open('frontend/src/context/AuthContext.jsx', 'w', encoding='utf-8') as f:
    f.write(auth_context)

login_page = '''
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-center">Login to your account</h3>
                <form onSubmit={loginUser}>
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="username">Username</label>
                            <input type="text" placeholder="Username" name="username"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required/>
                        </div>
                        <div className="mt-4">
                            <label className="block">Password</label>
                            <input type="password" placeholder="Password" name="password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required/>
                        </div>
                        <div className="flex items-baseline justify-between">
                            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                            <Link to="/signup" className="text-sm text-blue-600 hover:underline">Sign Up</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
'''
with open('frontend/src/pages/auth/Login.jsx', 'w', encoding='utf-8') as f:
    f.write(login_page)

signup_page = '''
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '', email: '', password: '', first_name: '', last_name: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/auth/register/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        if (response.status === 201) {
            navigate('/login');
        } else {
            alert('Signup failed');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-center">Sign up for an account</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <div>
                            <label className="block">Username</label>
                            <input type="text" name="username" onChange={handleChange} required
                                className="w-full px-4 py-2 mt-2 border rounded-md" />
                        </div>
                        <div className="mt-4">
                            <label className="block">Email</label>
                            <input type="email" name="email" onChange={handleChange} required
                                className="w-full px-4 py-2 mt-2 border rounded-md" />
                        </div>
                        <div className="mt-4">
                            <label className="block">Password</label>
                            <input type="password" name="password" onChange={handleChange} required
                                className="w-full px-4 py-2 mt-2 border rounded-md" />
                        </div>
                        <div className="flex items-baseline justify-between">
                            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg">Sign Up</button>
                            <Link to="/login" className="text-sm text-blue-600 hover:underline">Already have an account?</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Signup;
'''
with open('frontend/src/pages/auth/Signup.jsx', 'w', encoding='utf-8') as f:
    f.write(signup_page)

print('Frontend Auth generated!')
