import React from 'react';
import { Navigate, Outlet } from 'react-router';

function Protectedpanel(props) {
    const authenticate = localStorage.getItem('byteadminwithweb');
    if(!authenticate){
        return <Navigate to={"/adminlogin"} />
    }
    else if(authenticate){
        return <Outlet />
    }else{
        return <Navigate to={"/adminlogin"} />   
    }

}

export default Protectedpanel;