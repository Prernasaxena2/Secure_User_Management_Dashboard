// src/components/SignIn.js
import React from 'react';
import AuthForm from './AuthForm';
import AuthService from '../services/AuthService';
import { login } from '../authSlice';
import { useDispatch } from 'react-redux';

const SignIn = () => {
    const dispatch = useDispatch();
    const handleSignIn = async (email, password) => {
        const user = await AuthService.signIn(email, password);

        if (!user) {
            throw new Error('User not found. Please check your credentials.');
        }

        // Dispatch the login action to update the auth state
        dispatch(login(user));
    };

    return <AuthForm title="Sign In" onSubmit={handleSignIn} />;
};

export default SignIn;
