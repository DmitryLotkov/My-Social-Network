import React from 'react';
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootState} from "../../Redux/reduxStore";
import {checkAuthType} from "../../Redux/AuthReducer";


export const WithAuthRedirect = (Component: React.ComponentType<any>) => {

    const isAuth = useSelector<AppRootState, checkAuthType>(state => state.Auth.isAuth);

    return (props:any) => {
        if (isAuth === "unLogged") {
            return <Navigate to={"/login"}/>
        }
        return <Component {...props}/>

    };
};
