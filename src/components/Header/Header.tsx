import React from 'react';
import styles from "./Header.module.scss"
import {Navigation} from "./Navigation";


export function Header() {

    return (
        <header className={styles.headerWrapper}>
            <Navigation/>
        </header>

    )
}