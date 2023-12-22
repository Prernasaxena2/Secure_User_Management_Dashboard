// store.js
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import authReducer from './authSlice';


const store = configureStore({
    reducer: {
        auth: authReducer,
        // other reducers...
    },
    // middleware: [thunk],
});

export default store;
