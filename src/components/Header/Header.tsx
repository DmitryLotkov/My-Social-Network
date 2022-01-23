import React from 'react';
import s from "./Header.module.css"
import {TopContainer} from "./TopContainer";



export function Header(){
    return(
            <header className={s.Header}>
                <TopContainer/>
            </header>

    )
}