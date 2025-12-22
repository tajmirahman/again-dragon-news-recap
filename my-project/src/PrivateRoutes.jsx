import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user,loading}=useContext(AuthContext);
    const location=useLocation();

    if(loading){
        return <span className="loading loading-ring loading-xl"></span>
    }

    if(user && user?.email){
        return children
    }else{
        return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    }
};

export default PrivateRoutes;