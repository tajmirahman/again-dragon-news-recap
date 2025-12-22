import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user}=useContext(AuthContext);

    if(user && user?.email){
        return children
    }else{
        return <Navigate to={'/auth/login'}></Navigate>
    }
};

export default PrivateRoutes;