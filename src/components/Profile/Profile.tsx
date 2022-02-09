import React from "react";
import styles from "./Profile.module.css"
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPostsContainer";
import {userProfileType} from "../../Redux/ProfileReducer";
import commonStyle from "./../Common/boxStyle.module.css"


export type ProfilePropsType = {
   profile: userProfileType
}
export function Profile(props: ProfilePropsType){

    return(
            <div className={`${styles.content} ${commonStyle.mainBox}`}>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer/>
            </div>
    );
}