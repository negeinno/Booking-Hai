
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE } from '../../config/api';


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
        const response = await fetch(API_BASE + '/api/v1/auth/register/', {
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
