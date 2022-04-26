import React from 'react';
import style from "./Navbar.module.scss"
import chatStyles from "./ChatBlock.module.scss"
import {NavLink} from "react-router-dom";
import {SideBarType} from "../OldComponents/OldStore";
import {ChatBlock} from "./ChatBlock";
import {myUserID} from "../../Redux/AuthReducer";

type NavBarPropsType = {
    SideBar: SideBarType,
}

export function NavBar(props: NavBarPropsType) {

    let onlineFriends = props.SideBar.onlineFriends.map((f) =>
        <NavLink key={f.id} to={"/friends" + f.id}>
            <ChatBlock
                       id={f.id}
                       avatar={f.avatar}/>
        </NavLink>)
    return (
        <nav className={style.navWrapper}>
            <div className={style.NavItem}>
                <NavLink  to={`/profile/${myUserID}`} style={({ isActive }) => ({ color: isActive ? "goldenrod" : 'black' })}>Profile</NavLink>
            </div>
            <div className={style.NavItem}>
                <NavLink to={"/dialogs"} style={({ isActive }) => ({ color: isActive ? "goldenrod" : 'black' })}>Messages</NavLink>
            </div>
            <div className={style.NavItem}>
                <NavLink to={"/events"} style={({ isActive }) => ({ color: isActive ? "goldenrod" : 'black' })}>Events</NavLink>
            </div>
            <div className={style.NavItem}>
                <NavLink to={"/photos"} style={({ isActive }) => ({ color: isActive ? "goldenrod" : 'black' })}>Photos</NavLink>
            </div>
            <div className={style.NavItem}>
                <NavLink to={"/users"} style={({ isActive }) => ({ color: isActive ? "goldenrod" : 'black' })}>Find Friends</NavLink>
            </div>
            <div className={style.NavItem}>
                <NavLink to={"/settings"} style={({ isActive }) => ({ color: isActive ? "goldenrod" : 'black' })}>Settings</NavLink>
            </div>

            <div className={chatStyles.ChatBlock}>
                <span className={chatStyles.Title}>Chat online</span>
                {onlineFriends}
            </div>
        </nav>
    )
}

