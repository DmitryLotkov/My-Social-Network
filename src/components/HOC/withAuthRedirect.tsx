import React from 'react';
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootState} from "../../Redux/reduxStore";


export const WithAuthRedirect = (Component: React.ComponentType<any>) => {

    const isAuth = useSelector<AppRootState, boolean>(state => state.Auth.isAuth);

    return (props:any) => {
        if (!isAuth) {
            return <Navigate to={"/login"}/>
        }
        return <Component {...props}/>

    };
};
