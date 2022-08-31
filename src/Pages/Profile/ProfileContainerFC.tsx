import React, {FC, useEffect} from "react";
import {Navigate, useParams} from "react-router-dom";
import {ProfileFC} from "./ProfileFC";

import {useAppSelector} from "../../store/store";
import {PATH} from "../../App";
import {getProfileTC, getUserStatusTC} from "../../store/ProfileReducer";
import {useDispatch} from "react-redux";
import {isLoggedInSelector} from "../../components/Common/Selectors/Selectors";


export const ProfileContainerFC: FC = React.memo(() => {
    const dispatch = useDispatch();
    let userId = Number(useParams<'userId'>().userId);//эта id взялась из компоненты app из роута <Route path={"/profile/:userId"}
    const isLoggedIn = useAppSelector(isLoggedInSelector);
    const myUserID = useAppSelector(state => state.Auth.data.id);
    if (isNaN(userId)) {
        userId = myUserID;
    }

    useEffect(() => {
        if(userId){
            dispatch(getProfileTC(userId));
            dispatch(getUserStatusTC(userId));
        }

    }, [userId, dispatch]);

    if (!isLoggedIn) {
        return <Navigate to={PATH.LOGIN}/>
    }
    return <ProfileFC/>
})



