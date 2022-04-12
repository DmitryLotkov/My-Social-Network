import React from "react"
import styles from "./Preloader.module.scss"
import {CircularProgress} from "@material-ui/core";

export function Preloader (){
    return (
        <div className={styles.preloaderContainer}>
            <CircularProgress />
        </div>)
}