// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <body
                style={{
                    backgroundImage: `url('./background.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    minHeight: '100vh',
                    margin: 0,
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff', // Text color
                }}
            >
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold mb-6">Welcome to Your User Management System</h1>
                    <div className="mb-8">
                        <p className="text-lg mb-2">Easily manage your users with our intuitive system.</p>
                        <p className="text-lg">Sign up or log in to get started.</p>
                    </div>
                    <div className="flex space-x-4">
                        <Link
                            to="/signup"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600 focus:outline-none"
                        >
                            Sign Up
                        </Link>
                        <Link
                            to="/signin"
                            className="bg-green-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-green-600 focus:outline-none"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </body>
        </>
    );
};

export default Home;
