import React from "react";
import styles from "./Profile.module.css"
import {MyPosts} from "./MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {RootStateType} from "../../Redux/state";

export function Profile(props: RootStateType){
    return(
            <div className={styles.content}>
                <ProfileInfo/>
                <MyPosts ProfilePage={props.ProfilePage}/>
            </div>
    );
}