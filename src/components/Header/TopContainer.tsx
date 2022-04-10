import React from 'react';
import styles from "./Header.module.scss"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import {AppRootState} from "../../Redux/reduxStore";

import defaultUserPhoto from "../../Images/defaultUserImage.jpg";


export function TopContainer() {


    const login = useSelector<AppRootState, string | null>(state => state.auth.data.login);
    const isAuth = useSelector<AppRootState, boolean>(state => state.auth.isAuth);
    const myPhoto = useSelector<AppRootState, string | undefined>(state => state.ProfilePage.photo);
    return (
        <div className={styles.headerWrapper}>


            <img src={"https://themified.com/friend-finder/images/logo.png"} alt="logo"/>


            {isAuth ?
                <div className={styles.loginBlock}>
                    <img className={styles.smallUserHeaderPhoto} src={myPhoto ?? defaultUserPhoto} alt={"userPhoto"}/>
                    {login}
                </div> :

                <NavLink className={styles.login} to={"/login"}>
                    Login
                </NavLink>


            }


        </div>

    )
}