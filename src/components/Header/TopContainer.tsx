import React from 'react';
import styles from "./Header.module.scss"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {AppRootState} from "../../Redux/reduxStore";

import defaultUserPhoto from "../../Images/defaultUserImage.jpg";
import {logOutTC} from "../../Redux/AuthReducer";


export function TopContainer() {

    const dispatch = useDispatch()
    const login = useSelector<AppRootState, string | null>(state => state.Auth.data.login);
    const isAuth = useSelector<AppRootState, boolean>(state => state.Auth.isAuth);
    const myPhoto = useSelector<AppRootState, string | undefined>(state => state.ProfilePage.photo);

    const logOutHandler = () =>{
        dispatch(logOutTC());
    }
    return (
        <div className={styles.headerWrapper}>


            <img src={"https://templates.envytheme.com/zust/default/assets/images/logo.png"} alt="logo"/>


            {isAuth ?
                <div className={styles.loginBlock}>
                    <img className={styles.smallUserHeaderPhoto} src={myPhoto || defaultUserPhoto} alt={"userPhoto"}/>
                    <div className={styles.userName}>
                        {login}
                    </div>
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