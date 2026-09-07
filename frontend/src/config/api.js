export const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://bookinghai.onrender.com";

export const getAuthHeaders = () => {
    const token = localStorage.getItem('access_token');
    return token ? { Authorization: `Bearer ${token}` } : {};
};
