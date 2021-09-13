import React from 'react';
import s from "./Header.module.css"


export function Header(){
    return(
            <header className={s.Header}>
                <img src={"https://themified.com/friend-finder/images/logo.png"} alt={"logo"}/>
            </header>

    )
}