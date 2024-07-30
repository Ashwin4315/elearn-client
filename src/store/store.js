import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./Reducer/userReducer.js";

export const store=configureStore({
    reducer:{
        user:userReducer
    }
})
