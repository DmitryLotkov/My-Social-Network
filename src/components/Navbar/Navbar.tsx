import React from 'react';
import s from "./Navbar.module.css"
import chatStyles from "./ChatBlock.module.css"
import {NavLink} from "react-router-dom";
import {SideBarType} from "../../Redux/state";
import {ChatBlock} from "./ChatBlock";

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
        <nav className={s.nav}>
            <div className={s.NavItem}>
                <NavLink to={"/profile"} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.NavItem}>
                <NavLink to={"/dialogs"} activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.NavItem}>
                <NavLink to={"/events"} activeClassName={s.active}>Events</NavLink>
            </div>
            <div className={s.NavItem}>
                <NavLink to={"/photos"} activeClassName={s.active}>Photos</NavLink>
            </div>
            <div className={s.NavItem}>
                <NavLink to={"/settings"}>Settings</NavLink>
            </div>
            <div className={chatStyles.ChatBlock}>
                <span className={chatStyles.Title}>Chat online</span>
                {onlineFriends}
            </div>
        </nav>
    )
}

