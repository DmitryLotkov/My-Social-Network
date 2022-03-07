import React from "react";
import styles from "./Profile.module.css"
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPostsContainer";
import {userProfileType} from "../../Redux/ProfileReducer";
import commonStyle from "./../Common/boxStyle.module.css"
import {useSelector} from "react-redux";
import {AppRootState} from "../../Redux/reduxStore";


export const Profile = React.memo(() => {

    const profile = useSelector<AppRootState, userProfileType>(state => state.ProfilePage.profile);

    return (
        <div className={`${styles.content} ${commonStyle.mainBox}`}>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>
        </div>
    );
})