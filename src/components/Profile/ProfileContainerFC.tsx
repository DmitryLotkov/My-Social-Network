import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProfileTC, getUserStatusTC} from "../../Redux/ProfileReducer";
import {Navigate, useParams} from "react-router-dom";
import {ProfileFC} from "./ProfileFC";
import {isLoggedInSelector, userIDSelector} from "../Common/Selectors/Selectors";


export const ProfileContainerFC: FC = React.memo(() =>{

    const userId = Number(useParams<'userId'>().userId);//эта id взялась из компоненты app из роута <Route path={"/profile/:userId"}
    const myId = useSelector(userIDSelector);
    const isLoggedIn = useSelector(isLoggedInSelector)
    const dispatch = useDispatch();


    useEffect(() => {
        if (userId !== myId){
            dispatch(getProfileTC(userId));
            dispatch(getUserStatusTC(userId));
        }else{
            dispatch(getProfileTC(myId));
            dispatch(getUserStatusTC(myId));
        }

    }, [userId, dispatch, myId]);

    if (!isLoggedIn) {
        return <Navigate to={"/login"}/>
    }
    return <ProfileFC userID={userId}/>
})



