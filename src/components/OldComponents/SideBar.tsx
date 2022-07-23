import React from 'react';
import style from "./Navbar.module.scss"
import chatStyles from "../Profile/OnlineFriends/ChatBlock.module.scss"
import {NavLink} from "react-router-dom";
import {SideBarType} from "./OldStore";
import {ChatBlock} from "../Profile/OnlineFriends/ChatBlock";
import {myUserID} from "../../constants";
import {PATH} from "../../App";


type NavBarPropsType = {
    SideBar: SideBarType,
}

export function SideBar(props: NavBarPropsType) {

    let onlineFriends = props.SideBar.onlineFriends.map((f) =>
        <NavLink key={f.id} to={"/friends" + f.id}>
            <ChatBlock
                       id={f.id}
                       avatar={f.avatar}/>
        </NavLink>)
    return (
        <aside className={style.sideWrapper}>
            <div className={style.NavItem}>
                <NavLink  to={`${PATH.PROFILE}/${myUserID}`} style={({ isActive }) => ({ color: isActive ? "goldenrod" : 'black' })}>Profile</NavLink>
            </div>
            <div className={style.NavItem}>
                <NavLink to={PATH.DIALOGS} style={({ isActive }) => ({ color: isActive ? "goldenrod" : 'black' })}>Messages</NavLink>
            </div>
            <div className={style.NavItem}>
                <NavLink to={PATH.EVENTS} style={({ isActive }) => ({ color: isActive ? "goldenrod" : 'black' })}>Events</NavLink>
            </div>
            <div className={style.NavItem}>
                <NavLink to={PATH.PHOTOS} style={({ isActive }) => ({ color: isActive ? "goldenrod" : 'black' })}>Photos</NavLink>
            </div>
            <div className={style.NavItem}>
                <NavLink to={PATH.USERS} style={({ isActive }) => ({ color: isActive ? "goldenrod" : 'black' })}>Find Friends</NavLink>
            </div>
            <div className={style.NavItem}>
                <NavLink to={PATH.EDIT_PROFILE} style={({ isActive }) => ({ color: isActive ? "goldenrod" : 'black' })}>Settings</NavLink>
            </div>

            <div className={chatStyles.ChatBlock}>
                <span className={chatStyles.Title}>Chat online</span>
                {onlineFriends}
            </div>
        </aside>
    )
}

