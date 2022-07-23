import React from 'react';
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";


const WithAuthRedirect = (Component: React.ComponentType<any>) => {

    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.Auth.isInitialized);

    return (props:any) => {
        if (!isInitialized) {
            return <Navigate to={"/login"}/>
        }
        return <Component {...props}/>

    };
};
