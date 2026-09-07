import React from 'react';
import { Link } from 'react-router-dom';

const Discover = () => {
    return (
        <div className="container py-5 text-center">
            <h1>Discover Services</h1>
            <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
        </div>
    );
};

export default Discover;
