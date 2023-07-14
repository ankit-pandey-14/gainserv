import { createSlice } from '@reduxjs/toolkit';
import Records from '../constants/employee.json';

const initialState = {
    userList : Records,
};

export const employeeSlice = createSlice({
    name: 'employeeActions',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.userList = [...state.userList, action.payload]
        },

        updateEmployee: (state, action) => {
            const filteredData = state.userList.filter((user) => user.id !== action.payload.id)
            state.userList = [
                action.payload,
                ...filteredData,
            ]
        },

        deleteEmployee: (state, action) => {
            state.userList = state.userList.filter((user) => user.id !== action.payload)
        },
    },
})

export const { addEmployee, updateEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;