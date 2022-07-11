import React from 'react';
import styles from "./Header.module.scss"
import {TopContainer} from "./TopContainer";



export function Header(){

    return(
            <header className={styles.headerWrapper}>
                <TopContainer/>
            </header>

    )
}