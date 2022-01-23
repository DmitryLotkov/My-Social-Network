import React from 'react';
import styles from "./Header.module.css"


export function TopContainer(){
    return(
            <div className={styles.container}>

                    <a className="navbar-brand" href={"index-register.html"}><img src={"https://themified.com/friend-finder/images/logo.png"} alt="logo"/></a>
            </div>

    )
}