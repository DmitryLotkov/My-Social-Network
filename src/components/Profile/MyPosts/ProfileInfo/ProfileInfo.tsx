import React from "react";
import styles from "./ProfileInfo.module.scss"
import {
    ProfileDataType,
} from "../../../../Redux/ProfileReducer";
import defaultUserPhoto from "./../../../../Images/defaultUserImage.jpg";
import {ProfileStatus} from "../../ProfileStatus";

type profileInfoPropsType = {
    profile: ProfileDataType

}

export const ProfileInfo = React.memo((props: profileInfoPropsType)=> {

    return (
        <div className={styles.wrapper}>
            <div className={styles.descriptionBlock}>
                <img src={props.profile?.photos.large ?? defaultUserPhoto} alt={"userPhoto"}/>
            </div>
            <div className={styles.statusBlock}>
                <div className={styles.profileName}>{props.profile.fullName}</div>
                <div className={styles.profileStatus}>
                    <ProfileStatus/>
                </div>
                <div className={styles.lookingForAJobDescription}>
                    Looking for a job status: { props.profile.lookingForAJobDescription}
                </div>
                <div className={styles.contacts}>
                    <span>contacts: </span>
                    <div>facebook: {props.profile.contacts.facebook}</div>
                    <div>instagram: {props.profile.contacts.instagram}</div>
                    <div>YouTube: {props.profile.contacts.youtube}</div>
                    <div>Vk: {props.profile.contacts.vk}</div>
                </div>
            </div>
        </div>
    );
})