import React from 'react';
import s from "./Header.module.scss"
import {TopContainer} from "./TopContainer";



export function Header(){
    return(
            <header className={s.headerTopLevel}>
                <TopContainer/>
            </header>

    )
}