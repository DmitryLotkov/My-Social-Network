import React from 'react';
import {useSelector} from "react-redux";
import { Navigate } from 'react-router-dom';
import {isInitializedSelector} from "./components/Common/Selectors/Selectors";

export const LoginWrapper = () => {

    const isInitialized = useSelector(isInitializedSelector);
    if(!isInitialized){
        return <Navigate to={"/login"}/>
    }
    return <></>
};

export default LoginWrapper;