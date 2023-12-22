// PrivateRoute.js

// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return isAuthenticated ? element : <Navigate to="/signin" />;
};

export default PrivateRoute;
