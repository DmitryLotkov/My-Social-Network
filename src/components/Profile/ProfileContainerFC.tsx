import React, {FC, useEffect} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../Redux/reduxStore";
import {setUserProfileAC, userProfileType} from "../../Redux/ProfileReducer";
import {useParams} from "react-router-dom";


export const ProfileContainerFC: FC = React.memo(() => {
    const params = useParams<'userId'>();
    let userId = params.userId;

    const profile = useSelector<AppRootState, userProfileType>(state => state.ProfilePage.profile);

    const dispatch = useDispatch();
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/ ${userId}`).then(response => {
                dispatch(setUserProfileAC(response.data));
            }
        )
    }, [userId, dispatch]);
    return (
        <Profile profile={profile}/>
    )
})



