async function fetchAPI(endpoint, options = {}) {
    const token = localStorage.getItem('access_token');
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    };
    if (token) {
        headers['Authorization'] = \Bearer \\;
    }
    const response = await fetch(\\\\, {
        ...options,
        headers
    });
    if (response.status === 401) {
        // Handle refresh logic or logout here
        localStorage.removeItem('access_token');
        window.location.href = '/login.html';
    }
    return response;
}
