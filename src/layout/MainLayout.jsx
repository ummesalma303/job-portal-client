import React from 'react';
import Navbar from '../pages/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';

const MainLayout = () => {
    return (
       <div>
         <Navbar></Navbar>
        <div className='max-w-[1380px] mx-auto'>
            <Outlet></Outlet>
        </div>
            <Footer></Footer>
       </div>
    );
};

export default MainLayout;