import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import EmployeeListScreen from "../screen/EmployeeListScreen";
import EmployeeDetailsScreen from "../screen/EmployeeDetailsScreen";
import * as ROUTES from '../constants/routes';

const Routing = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<EmployeeListScreen />} />
            <Route path={ROUTES.DETAILS} element={<EmployeeDetailsScreen />} />
            <Route path="*" element={ <Navigate to={ROUTES.HOME} replace={true} /> } />
        </Routes>
    );
};

export default Routing;