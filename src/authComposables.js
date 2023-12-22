// src/authComposables.js
import { useDispatch } from 'react-redux';
import { login, logout } from './authSlice';

export const useLogin = () => {
    const dispatch = useDispatch();
    return (user) => dispatch(login(user));
};

export const useLogout = () => {
    const dispatch = useDispatch();
    return () => dispatch(logout());
};
