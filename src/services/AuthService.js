// src/services/authService.js
const API_BASE_URL = 'https://reqres.in/api';

const AuthService = {
    signUp: async (email, password) => {
        try {
            const response = await fetch(`${API_BASE_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error);
            }

            return data;
        } catch (error) {
            throw new Error(error.message || 'Sign up failed');
        }
    },

    signIn: async (email, password) => {
        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error);
            }

            return data.token;
        } catch (error) {
            throw new Error(error.message || 'Sign in failed');
        }
    },
};

export default AuthService;
