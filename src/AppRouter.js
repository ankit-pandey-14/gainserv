import React from 'react';
import SideBar from './components/SideBar';
import Header from './components/Header';
import EmployeeListScreen from './screen/EmployeeListScreen';

const AppRouter = () => {
    return (
        <>
            <SideBar />
            <div className='content'>
                <Header />
                <EmployeeListScreen />
            </div>
        </>
    );
};

export default AppRouter;