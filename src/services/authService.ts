import axios from 'axios';

const API_URL = 'https://api.brewedawakenings.com/auth';

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};

export const register = async (name: string, email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { name, email, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Registration failed');
    }
};

export const logout = async () => {
    try {
        await axios.post(`${API_URL}/logout`);
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Logout failed');
    }
};