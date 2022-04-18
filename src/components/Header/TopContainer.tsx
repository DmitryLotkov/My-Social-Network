import React from 'react';
import styles from "./Header.module.scss"
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../Redux/reduxStore";
import {checkAuthType, logOutTC} from "../../Redux/AuthReducer";
import {MyProfilePhoto} from "../Common/MyProfilePhoto/MyProfilePhoto";


export function TopContainer() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuth = useSelector<AppRootState, checkAuthType>(state => state.Auth.isAuth);

    const logOutHandler = () =>{
        dispatch(logOutTC());
    }
    const redirectToMyProfile = () => {
        navigate("/profile/21748");
    }
    return (
        <div className={styles.headerWrapper}>

            <img src={"https://templates.envytheme.com/zust/default/assets/images/logo.png"} alt="logo"/>


            {isAuth ==="logged" ?
                <div className={styles.loginBlock} onClick={redirectToMyProfile}>
                    <MyProfilePhoto/>
                    <div className={styles.login} onClick={logOutHandler}>
                        Log out
                    </div>
                </div> :

                <NavLink className={styles.login} to={"/login"}>
                    Log in
                </NavLink>


            }


        </div>

    )
}

