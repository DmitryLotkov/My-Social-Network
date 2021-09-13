import React from "react";
import styles from "./Profile.module.css"
import {MyPosts} from "./MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";

export function Profile(){
    return(
            <div className={styles.content}>
                <ProfileInfo/>
                <MyPosts/>
            </div>
    );
}