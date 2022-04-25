import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/reduxStore";
import styles from "./MyProfilePhoto.module.scss";
import defaultUserPhoto from "../../../Images/defaultUserImage.jpg";

export const MyProfilePhoto = React.memo(() =>{
    const myPhoto = useSelector<AppRootStateType, string | undefined>(state => state.ProfilePage.photo);
    const login = useSelector<AppRootStateType, string | null>(state => state.Auth.data.login);

    return (
        <div className={styles.myProfilePhotoWrapper}>
            <img className={styles.mySmallPhoto} src={myPhoto || defaultUserPhoto} alt={"userPhoto"}/>
            <div className={styles.userName}>
                {login}
            </div>
        </div>
    )
})