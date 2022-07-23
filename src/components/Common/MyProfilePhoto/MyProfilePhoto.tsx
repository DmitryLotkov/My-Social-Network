import React from "react";
import {useSelector} from "react-redux";
import {useAppSelector} from "../../../store/store";
import styles from "./MyProfilePhoto.module.scss";
import defaultUserPhoto from "../../../Images/defaultUserImage.jpg";
import { useNavigate } from "react-router-dom";
import {userIDSelector} from "../Selectors/Selectors";


export const MyProfilePhoto = React.memo(() =>{
    const navigate = useNavigate()
    const myPhoto = useAppSelector<string | undefined>(state => state.ProfilePage.profile.photos?.small);
    const myLoginName = useAppSelector<string | null>(state => state.Auth.data.login);
    const userID = useSelector(userIDSelector)
    const navigateToMyMage = ()=>{
        navigate(`/profile/${userID}`)
    }

    return (
        <div className={styles.myProfilePhotoWrapper}>
            <img className={styles.mySmallPhoto} src={myPhoto || defaultUserPhoto} alt={"userPhoto"}/>
            <div onClick={navigateToMyMage}>
                <strong>{myLoginName}</strong>
                <div className={styles.jobDescription}>Frontend developer</div>
            </div>

        </div>
    )
})