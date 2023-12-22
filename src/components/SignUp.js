// src/components/SignUp.js
import React from 'react';
import AuthForm from './AuthForm';
import AuthService from '../services/AuthService';

const SignUp = () => {
    const handleSignUp = async (email, password) => {
        await AuthService.signUp(email, password);
        // Handle success or redirect if needed
    };

    return <AuthForm title="Sign Up" onSubmit={handleSignUp} />;
};

export default SignUp;
