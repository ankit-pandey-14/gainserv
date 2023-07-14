import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../redux/employeeSlice';


export const store = configureStore({
    reducer: {
        emp: employeeReducer,
    },
});