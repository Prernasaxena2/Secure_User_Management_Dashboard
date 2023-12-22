// src/__tests__/authSlice.test.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer, { login, logout } from '../authSlice';

describe('authSlice', () => {
    test('login action should update the state with user information', () => {
        const initialState = { isAuthenticated: false, user: null };
        const store = configureStore({
            reducer: { auth: authReducer },
            preloadedState: { auth: initialState },
        });

        const user = { id: 1, username: 'testuser' };
        store.dispatch(login(user));

        const state = store.getState().auth;
        expect(state.isAuthenticated).toBe(true);
        expect(state.user).toEqual(user);
    });

    test('logout action should update the state to initial values', () => {
        const initialState = { isAuthenticated: true, user: { id: 1, username: 'testuser' } };
        const store = configureStore({
            reducer: { auth: authReducer },
            preloadedState: { auth: initialState },
        });

        store.dispatch(logout());

        const state = store.getState().auth;
        expect(state.isAuthenticated).toBe(false);
        expect(state.user).toBe(null);
    });

    // Add more tests for authSlice as needed
});
