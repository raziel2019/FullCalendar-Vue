import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api/', 
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('auth_token');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default apiClient;