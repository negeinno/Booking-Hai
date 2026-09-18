import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RoleSelection from './pages/RoleSelection';
import OwnerDashboard from './pages/OwnerDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import Dashboard from './pages/Dashboard';
import Discover from './pages/Discover';
import Business from './pages/Business';
import { AuthProvider } from './context/AuthContext';

import OTPVerification from './pages/OTPVerification';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />`n          <Route path="/role" element={<RoleSelection />} />`n          <Route path="/owner-dashboard" element={<OwnerDashboard />} />`n          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/verify-otp" element={<OTPVerification />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/business" element={<Business />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

