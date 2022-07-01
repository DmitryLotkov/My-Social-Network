import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/reduxStore";
import styles from "./MyProfilePhoto.module.scss";
import defaultUserPhoto from "../../../Images/defaultUserImage.jpg";
import { useNavigate } from "react-router-dom";
import {userIDSelector} from "../Selectors/Selectors";

export const MyProfilePhoto = React.memo(() =>{
    const navigate = useNavigate()
    const myPhoto = useSelector<AppRootStateType, string | undefined>(state => state.ProfilePage.photo);
    const myLoginName = useSelector<AppRootStateType, string | null>(state => state.Auth.data.login);
    const userID = useSelector(userIDSelector)
    const navigateToMyMage = ()=>{
        navigate(`/profile/${userID}`)
    }

    return (
        <div className={styles.myProfilePhotoWrapper}>
            <img className={styles.mySmallPhoto} src={myPhoto || defaultUserPhoto} alt={"userPhoto"}/>
            <div className={styles.userName} onClick={navigateToMyMage}>
                {myLoginName}
            </div>
        </div>
    )
})