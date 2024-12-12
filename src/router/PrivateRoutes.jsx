import React from 'react';
import useAuth from '../hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
   
    if (loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
       return children 
    }
    return (
        <Navigate to='/signIn' state={location?.pathname}></Navigate>
    );
};

export default PrivateRoutes;