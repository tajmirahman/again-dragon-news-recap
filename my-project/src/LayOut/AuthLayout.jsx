import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='w-11/12 mx-auto bg-base-200'>
            <Header></Header>

            <Outlet></Outlet>

        </div>
    );
};

export default AuthLayout;