import React from 'react';
import styles from "./Header.module.scss"
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOutTC} from "../../store/AuthReducer";
import Button from "@mui/material/Button";
import {isLoggedInSelector, myIDSelector} from "../Common/Selectors/Selectors";
import logo from "./../../Images/Logo.svg"
import {PATH} from "../../App";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import MessageIcon from '@mui/icons-material/Message';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import {MyProfilePhoto} from "../Common/MyProfilePhoto/MyProfilePhoto";
import LogoutIcon from '@mui/icons-material/Logout';
import {IconButton} from "@mui/material";

export function Navigation() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(isLoggedInSelector);
    const logOutHandler = () => {
        dispatch(logOutTC());
        navigate("/login")
    }
    const myID = useSelector(myIDSelector);

    const navigateToMyMage = () => {
        navigate(`/profile/${myID}`)
    }
    return (
        <div className={styles.headerContent}>
            <div className={styles.logo}><img src={logo} alt="logo"/></div>
            <nav className={styles.sideWrapper}>
                <div className={styles.NavItem}>
                    <NavLink to={`${PATH.PROFILE}/${myID}`}
                             className={({isActive}) => isActive ? `${styles.activeNavLink}` : `${styles.unActiveNavLink}`}>
                        <RssFeedIcon fontSize={'large'}/>
                        <div className={styles.hideForMobile}>Feed</div>
                    </NavLink>
                </div>
                <div className={styles.NavItem}>
                    <NavLink to={PATH.DIALOGS}
                             className={({isActive}) => isActive ? `${styles.activeNavLink}` : `${styles.unActiveNavLink}`}>
                        <MessageIcon fontSize={'large'}/>
                        <div className={styles.hideForMobile}>Messages</div>
                    </NavLink>
                </div>

                <div className={styles.NavItem}>
                    <NavLink to={PATH.USERS}
                             className={({isActive}) => isActive ? `${styles.activeNavLink}` : `${styles.unActiveNavLink}`}>
                        <PeopleAltIcon fontSize={'large'}/>
                        <div className={styles.hideForMobile}>All Users</div>
                    </NavLink>
                </div>
                <div className={styles.NavItem}>
                    <NavLink to={PATH.EDIT_PROFILE}
                             className={({isActive}) => isActive ? `${styles.activeNavLink}` : `${styles.unActiveNavLink}`}>
                        <SettingsIcon fontSize={'large'}/>
                        <div className={styles.hideForMobile}>Edit Profile</div>
                    </NavLink>
                </div>

            </nav>

            <div className={styles.loginBlock}>
                <div className={styles.profilePhoto} onClick={navigateToMyMage}>
                    <MyProfilePhoto/>
                </div>
                {/*<div className={styles.jobStatus}>
                    <div className={styles.userName} onClick={navigateToMyMage}>
                        {myLoginName}
                    </div>
                </div>*/}
                {
                    isLoggedIn &&
                    <>
                        <Button variant={"outlined"} className={styles.loginButton} onClick={logOutHandler}>
                            Log out
                        </Button>

                         <IconButton className={styles.logOutIcon} onClick={logOutHandler}>
                            <LogoutIcon fontSize={"large"} />
                        </IconButton>
                    </>
                }
            </div>
        </div>

    )
}


