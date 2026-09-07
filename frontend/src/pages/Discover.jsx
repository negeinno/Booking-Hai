import React from 'react';
import { Link } from 'react-router-dom';

const Discover = () => {
    return (
        <div className="max-w-7xl mx-auto px-10 sm:px-14 lg:px-18 py-12 text-center">
            <h1>Discover Services</h1>
            <Link to="/" className="inline-block px-14 py-8 bg-brand-yellow text-slate-900 font-bold brutal-border brutal-shadow brutal-hover mt-8">Back to Home</Link>
        </div>
    );
};

export default Discover;
