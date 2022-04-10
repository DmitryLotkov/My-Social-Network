import React from "react";
import styles from "./Profile.module.scss"
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPostsContainer";
import {ProfileDataType,} from "../../Redux/ProfileReducer";
import commonStyle from "./../Common/boxStyle.module.css"
import {useSelector} from "react-redux";
import {AppRootState} from "../../Redux/reduxStore";


export const Profile = React.memo(() => {

    const profile = useSelector<AppRootState, ProfileDataType>(state => state.ProfilePage.profile);

    return (
        <div className={`${styles.wrapper} ${commonStyle.mainBox}`}>
            <ProfileInfo profile={profile}
            />
            <MyPostsContainer/>
        </div>
    );
})