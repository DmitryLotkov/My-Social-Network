import React, {FC, useEffect} from "react";


import {Navigate, useParams} from "react-router-dom";
import {ProfileFC} from "./ProfileFC";
import {isLoggedInSelector} from "../Common/Selectors/Selectors";
import {useAppSelector} from "../../Redux/store";
import {PATH} from "../../App";
import {myUserID} from "../../constants";
import {getProfileTC, getUserStatusTC} from "../../Redux/ProfileReducer";
import {useDispatch} from "react-redux";


export const ProfileContainerFC: FC = React.memo(() =>{
    const dispatch = useDispatch();

    const userId = Number(useParams<'userId'>().userId);//эта id взялась из компоненты app из роута <Route path={"/profile/:userId"}
    const isLoggedIn = useAppSelector(isLoggedInSelector)
    useEffect(() => {

        if (userId !== myUserID){

            dispatch(getProfileTC(userId));
            dispatch(getUserStatusTC(userId));
        }else{
            dispatch(getProfileTC(myUserID));
            dispatch(getUserStatusTC(myUserID));
        }

    }, [userId, dispatch]);
    if (!isLoggedIn) {
        return <Navigate to={PATH.LOGIN}/>
    }
    return <ProfileFC userID={userId}/>
})



