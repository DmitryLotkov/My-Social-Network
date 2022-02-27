import React, {useEffect} from 'react';
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {DataType, setUserAC} from "../../Redux/authReducer";
import {AppRootState} from "../../Redux/reduxStore";
import {setUserProfileAC} from "../../Redux/ProfileReducer";
import defaultUserPhoto from "../../Images/defaultUserImage.jpg";
import {userAPI} from "../api";


export function TopContainer() {

    const dispatch = useDispatch();
    const login = useSelector<AppRootState, string | null>(state => state.auth.data.login);
    const isAuth = useSelector<AppRootState, boolean>(state => state.auth.isAuth);
    const photo = useSelector<AppRootState, string | undefined>(state => state.ProfilePage.profile.photos.small)

    useEffect(() => {

        userAPI.getAuth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserAC(response.data.data));
                    return response.data.data.id;
                }
            })
            .then((value: DataType) => userAPI.getUserID(value))
            .then(response => {
                return (
                    dispatch(setUserProfileAC(response.data))
                )
            })

    }, [dispatch])

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