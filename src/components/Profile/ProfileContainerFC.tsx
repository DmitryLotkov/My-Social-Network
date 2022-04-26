import React, {FC, useEffect} from "react";
import {useDispatch} from "react-redux";
import {getProfileTC, getUserStatusTC} from "../../Redux/ProfileReducer";
import {useParams} from "react-router-dom";

import {ProfileFC} from "./ProfileFC";
import {myUserID} from "../../Redux/AuthReducer";




export const ProfileContainerFC: FC = React.memo(() => {

    const params = useParams<'userId'>();
    const userId = Number(params.userId); //эта id взялась из компоненты app из роута <Route path={"/profile/:userId"}
    const dispatch = useDispatch();

    useEffect(() => {
        if (userId !== myUserID){
            dispatch(getProfileTC(userId));
            dispatch(getUserStatusTC(userId));
        }else{
            dispatch(getProfileTC(myUserID));
            dispatch(getUserStatusTC(myUserID));
        }

    }, [userId, dispatch]);


    return <ProfileFC userID={userId}/>


})



