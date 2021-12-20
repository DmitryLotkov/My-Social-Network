import React from "react";
import styles from "./Profile.module.css"
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPostsContainer";

export function Profile(){

    return(
            <div className={styles.content}>
                <ProfileInfo/>
                <MyPostsContainer/>
            </div>
    );
}