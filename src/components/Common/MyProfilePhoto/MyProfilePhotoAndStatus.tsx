import React from "react";
import {useSelector} from "react-redux";
import {useAppSelector} from "../../../Redux/store";
import styles from "./MyProfilePhoto.module.scss";
import defaultUserPhoto from "../../../Images/defaultUserImage.jpg";
import { useNavigate } from "react-router-dom";
import {userIDSelector} from "../Selectors/Selectors";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";


export const MyProfilePhotoAndStatus = React.memo(() =>{
    const navigate = useNavigate()
    const myPhoto = useAppSelector<string | undefined>(state => state.ProfilePage.profile.photos?.small);
    const myLoginName = useAppSelector<string | null>(state => state.Auth.data.login);
    const userID = useSelector(userIDSelector);
    const isLookingForAJob = useAppSelector(state => state.ProfilePage.profile.lookingForAJob)
    const navigateToMyMage = ()=>{
        navigate(`/profile/${userID}`)
    }

    return (
        <div className={styles.myProfilePhotoWrapper}>
            <img className={styles.mySmallPhoto} src={myPhoto || defaultUserPhoto} alt={"userPhoto"}/>
            <div className={styles.userName} onClick={navigateToMyMage}>
                {myLoginName}
                <div className={styles.jobStatus}>
                    <div>Looking for a job</div>
                    <CheckCircleOutlineIcon fontSize={"small"} color={isLookingForAJob ? "success" : "error"}/>
                </div>
            </div>
        </div>
    )
})