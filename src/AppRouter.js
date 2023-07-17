import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SideBar from './components/SideBar';
import Header from './components/Header';
import Routing from './Routing';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <SideBar />
            <div className='content'>
                <Header />
                <Routing />
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;