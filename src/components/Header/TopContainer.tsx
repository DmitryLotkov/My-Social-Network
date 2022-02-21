import React, {useEffect} from 'react';
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {DataType, setUserAC} from "../../Redux/authReducer";
import {AppRootState} from "../../Redux/reduxStore";
import {setUserProfileAC} from "../../Redux/ProfileReducer";



export function TopContainer() {
    const dispatch = useDispatch();
    const login = useSelector<AppRootState, string | null>(state => state.auth.data.login);
    const isAuth = useSelector<AppRootState, boolean>(state => state.auth.isAuth);

    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0//auth/me", {
            withCredentials: true
        })
            .then(response => {

                if (response.data.resultCode === 0) {
                    dispatch(setUserAC(response.data.data));
                    return response.data.data.id;
                }
            })
            .then((value:DataType) => axios.get(`https://social-network.samuraijs.com/api/1.0//profile/${value}`)
            )
            .then(response => dispatch(setUserProfileAC(response.data)))

    }, [dispatch])

    return (
        <div className={styles.container}>

            <a className="navbar-brand" href={"index-register.html"}>
                <img src={"https://themified.com/friend-finder/images/logo.png"} alt="logo"/>
            </a>
            <div className={styles.loginBlock}>
                {isAuth ?
                    <div className={styles.loginBlock}>
                        {login}
                    </div> :
                    <NavLink  to={"/login"}>
                        Login
                    </NavLink>
                }

            </div>
        </div>

    )
}