// src/components/AuthForm.js
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const AuthForm = ({ title, onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call the provided onSubmit function
            await onSubmit(email, password);

            // Clear form fields after successful sign-in or sign-up
            setEmail('');
            setPassword('');
            setError('');

            // Redirect to the dashboard or any other page after successful sign-in or sign-up
            navigate('/dashboard');
        } catch (error) {
            // Handle sign-in or sign-up error
            setError(error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-6">{title}</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        {title}
                    </button>
                </div>
                {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
                <p className="text-gray-600 mt-4">
                    {title === 'Sign In' ? (
                        <>
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-blue-500">
                                Sign up here.
                            </Link>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <Link to="/signin" className="text-blue-500">
                                Sign in here.
                            </Link>
                        </>
                    )}
                </p>
            </form>
        </div>
    );
};

export default AuthForm;
