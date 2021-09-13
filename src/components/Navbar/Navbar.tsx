import React from 'react';
import  s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export function NavBar(){
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
                    <a>Settings</a>
                </div>
            </nav>

    )
}