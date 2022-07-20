import React from 'react';
import styles from "./Header.module.scss"
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOutTC} from "../../Redux/AuthReducer";
import Button from "@mui/material/Button";
import {isLoggedInSelector, userIDSelector} from "../Common/Selectors/Selectors";
import logo from "./../../Images/Logo.svg"
import {PATH} from "../../App";
import {myUserID} from "../../constants";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import MessageIcon from '@mui/icons-material/Message';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import {useAppSelector} from "../../Redux/store";


export function Navigation() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(isLoggedInSelector);
    const logOutHandler = () => {
        dispatch(logOutTC());
        navigate("/login")
    }
    const myLoginName = useAppSelector<string | null>(state => state.Auth.data.login);
    const userID = useSelector(userIDSelector)
    const navigateToMyMage = ()=>{
        navigate(`/profile/${userID}`)
    }
    return (
        <div className={styles.headerContent}>
            <div className={styles.logo}><img src={logo} alt="logo"/></div>
            <nav className={styles.sideWrapper}>
                <div className={styles.NavItem}>
                    <NavLink to={`${PATH.PROFILE}/${myUserID}`}
                             className={({isActive}) => isActive ? `${styles.activeNavLink}` : `${styles.unActiveNavLink}`}>
                        <RssFeedIcon fontSize={'large'}/>
                        <div>Feed</div>
                    </NavLink>
                </div>
                <div className={styles.NavItem}>
                    <NavLink to={PATH.DIALOGS} className={({isActive}) => isActive ? `${styles.activeNavLink}` : `${styles.unActiveNavLink}`}>
                        <MessageIcon fontSize={'large'}/>
                        <div>Messages</div>
                    </NavLink>
                </div>

                <div className={styles.NavItem}>
                    <NavLink to={PATH.USERS}
                             className={({isActive}) => isActive ? `${styles.activeNavLink}` : `${styles.unActiveNavLink}`}>
                        <PeopleAltIcon fontSize={'large'}/>
                        <div>All Users</div>
                    </NavLink>
                </div>
                <div className={styles.NavItem}>
                    <NavLink to={PATH.EDIT_PROFILE} className={({isActive}) => isActive ? `${styles.activeNavLink}` : `${styles.unActiveNavLink}`}>
                        <SettingsIcon fontSize={'large'}/>
                        <div>Edit Profile</div>
                    </NavLink>
                </div>

            </nav>

            <div className={styles.loginBlock}>

                <div className={styles.jobStatus}>
                    <div className={styles.userName} onClick={navigateToMyMage}>
                        {myLoginName}
                    </div>
                </div>
                {isLoggedIn &&
                <Button variant={"outlined"} className={styles.login} onClick={logOutHandler}>
                    Log out
                </Button>}
            </div>
        </div>

    )
}


