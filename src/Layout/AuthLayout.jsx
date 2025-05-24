import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Login from '../Pages/Login';

const AuthLayout = () => {
    return (
        <div className='font-poppins bg-[#F3F3F3]'>
            <Header className="py-3 w-11/12 mx-auto"></Header>
            <NavBar></NavBar>
            {/* <Login></Login> */}
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;