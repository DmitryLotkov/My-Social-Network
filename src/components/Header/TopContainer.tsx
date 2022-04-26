import React from 'react';
import styles from "./Header.module.scss"
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/reduxStore";
import {logOutTC} from "../../Redux/AuthReducer";
import {MyProfilePhoto} from "../Common/MyProfilePhoto/MyProfilePhoto";
import Button from "@mui/material/Button";


export function TopContainer() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.Auth.isLoggedIn);

    const logOutHandler = () =>{
        dispatch(logOutTC());
        navigate("/login")
    }

    return (
        <div className={styles.headerContent}>
            <img src={"https://templates.envytheme.com/zust/default/assets/images/logo.png"} alt="logo"/>
                <div className={styles.loginBlock}>
                    {isLoggedIn &&<MyProfilePhoto/>}
                    {isLoggedIn && <Button className={styles.login} onClick={logOutHandler}>
                        Log out
                    </Button>}
                </div>
        </div>

    )
}

