import React from 'react';
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import {AppRootState} from "../../Redux/reduxStore";

import defaultUserPhoto from "../../Images/defaultUserImage.jpg";



export function TopContainer() {


    const login = useSelector<AppRootState, string | null>(state => state.auth.data.login);
    const isAuth = useSelector<AppRootState, boolean>(state => state.auth.isAuth);
    const photo = useSelector<AppRootState, string | undefined>(state => state.ProfilePage.profile.photos.small);

    return (
        <div className={styles.container}>

            <a className="navbar-brand" href={"index-register.html"}>
                <img src={"https://themified.com/friend-finder/images/logo.png"} alt="logo"/>
            </a>

            {isAuth ?
                <div className={styles.loginBlock}>
                    <img className={styles.smallUserHeaderPhoto} src={photo ?? defaultUserPhoto} alt={"userPhoto"}/>
                    {login}
                </div> :

                <NavLink className={styles.login} to={"/login"}>
                    Login
                </NavLink>


            }


        </div>

    )
}