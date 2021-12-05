import React from "react";
import styles from "./Profile.module.css"
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPostsContainer";
import {AppStoreType} from "../../Redux/reduxStore";
type ProfilePropsType = {
    store: AppStoreType
}

export function Profile(props: ProfilePropsType){

    return(
            <div className={styles.content}>
                <ProfileInfo/>
                <MyPostsContainer store={props.store}/>
            </div>
    );
}