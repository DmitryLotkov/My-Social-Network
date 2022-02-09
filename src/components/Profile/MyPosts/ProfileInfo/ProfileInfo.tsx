import React from "react";
import styles from "./ProfileInfo.module.css"
import {userProfileType} from "../../../../Redux/ProfileReducer";

import defaultUserPhoto from "./../../../../Images/defaultUserImage.jpg"
type profileInfoPropsType = {
    profile: userProfileType
}

export function ProfileInfo(props: profileInfoPropsType) {



    return (
        <div className={`${styles.content}`}>
            {<div>
                <img src={props.profile?.photos.large ?? defaultUserPhoto} alt={"userPhoto"}/>
            </div>}
            <div className={styles.descriptionBlock}>
                {props.profile.fullName}
            </div>
            <div className={styles.contacts}>
                <span>contacts: </span>
                <a href={props.profile.contacts.facebook}>facebook</a>
                <a href={props.profile.contacts.instagram}>instagram</a>
                <a href={props.profile.contacts.youtube}>Youtube</a>
                <a href={`props.profile.contacts.vk1`}>Vk</a>
            </div>
            <div>{props.profile.lookingForAJobDescription}</div>

        </div>
    );
}