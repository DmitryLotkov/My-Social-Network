import React, {FC, useEffect} from "react";
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../Redux/reduxStore";
import {getProfileThunkCreator, userProfileType} from "../../Redux/ProfileReducer";
import {useParams} from "react-router-dom";



export const ProfileContainerFC: FC = React.memo(() => {
    const params = useParams<'userId'>();
    let userId = params.userId;

    const profile = useSelector<AppRootState, userProfileType>(state => state.ProfilePage.profile);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProfileThunkCreator(userId))
    }, [userId, dispatch]);
    return (
        <Profile profile={profile}/>
    )
})



