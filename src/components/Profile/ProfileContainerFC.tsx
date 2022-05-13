import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProfileTC, getUserStatusTC} from "../../Redux/ProfileReducer";
import {useParams} from "react-router-dom";
import {ProfileFC} from "./ProfileFC";
import { userIDSelector} from "../Common/Selectors/Selectors";


export const ProfileContainerFC: FC = React.memo(() =>{

    const userId = Number(useParams<'userId'>().userId);//эта id взялась из компоненты app из роута <Route path={"/profile/:userId"}
    const myId = useSelector(userIDSelector);
    const dispatch = useDispatch();

    console.log("myId", myId);
    console.log("userId", userId)
    useEffect(() => {
        if (userId !== myId){
            debugger
            dispatch(getProfileTC(userId));
            dispatch(getUserStatusTC(userId));
        }else{
            dispatch(getProfileTC(myId));
            dispatch(getUserStatusTC(myId));
        }

    }, [userId, dispatch, myId]);


    return <ProfileFC userID={userId}/>
})



