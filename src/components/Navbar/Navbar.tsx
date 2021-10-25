import React from 'react';
import s from "./Navbar.module.css"
import chatStyles from "./ChatBlock.module.css"
import {NavLink} from "react-router-dom";
import {RootStateType} from "../../Redux/state";
import {ChatBlock} from "./ChatBlock";

export function NavBar(props: RootStateType){

    let onlineFriends = props.SideBar?.onlineFriends.map((f)=> <ChatBlock key={f.id}
                                                                          id={f.id}
                                                                          avatar={f.avatar}/> )
    return(
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

