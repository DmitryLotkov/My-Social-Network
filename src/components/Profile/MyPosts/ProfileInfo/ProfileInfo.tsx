import React from "react";
import styles from "./ProfileInfo.module.css"
import {userProfileType} from "../../../../Redux/ProfileReducer";
import defaultUserPhoto from "./../../../../Images/defaultUserImage.jpg"
import {ProfileStatus} from "../../ProfileStatus";

type profileInfoPropsType = {
    profile: userProfileType
}

export const ProfileInfo = React.memo((props: profileInfoPropsType)=> {

    return (
        <div className={styles.content}>
            <div className={styles.descriptionBlock}>
                <img src={props.profile?.photos.large ?? defaultUserPhoto} alt={"userPhoto"}/>
            </div>
            <div className={styles.statusBlock}>
                <div className={styles.profileName}>{props.profile.fullName}</div>
                <div className={styles.profileStatus}>
                    <ProfileStatus/>
                </div>
                <div className={styles.lookingForAJobDescription}>
                    {props.profile.lookingForAJobDescription}
                </div>
                <div className={styles.contacts}>
                    <span>contacts: </span>
                    <a href={props.profile.contacts.facebook}>facebook</a>
                    <a href={props.profile.contacts.instagram}>instagram</a>
                    <a href={props.profile.contacts.youtube}>YouTube</a>
                    <a href={props.profile.contacts.vk}>Vk</a>
                </div>
            </div>
        </div>
    );
})