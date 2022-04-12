import React, {FC, useEffect} from "react";
import {useDispatch} from "react-redux";
import {getProfileThunkCreator, getUserStatusTC} from "../../Redux/ProfileReducer";
import {useParams} from "react-router-dom";
import {WithAuthRedirect} from "../HOC/withAuthRedirect";
import {Profile} from "./Profile";


export const ProfileContainerFC: FC = React.memo(() => {
    const params = useParams<'userId'>();
    const userId = Number(params.userId); //эта id взялась из компоненты app из роута <Route path={"/profile/:userId"}
    const dispatch = useDispatch();
    const Redirect = WithAuthRedirect(Profile);

    useEffect(() => {
        dispatch(getProfileThunkCreator(userId));
        dispatch(getUserStatusTC(userId));
    }, [userId, dispatch]);

    return <Redirect/>
    // return <Profile/>

})



