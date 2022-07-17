import React from 'react';
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useAppSelector} from "../Redux/store";
import {isLoggedInSelector} from "./Common/Selectors/Selectors";
import {Header} from "./Header/Header";

const PrivateRoutes = () => {
    const location = useLocation();

    const isLoggedIn = useAppSelector<boolean>(isLoggedInSelector);

    if (!isLoggedIn) {
        return (
            <Navigate
                to={`/login?redirectTo=${encodeURIComponent(location.pathname)}`}
                replace
            />
        );
    }

    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default PrivateRoutes;