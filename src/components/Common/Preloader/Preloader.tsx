import React from "react"
import styles from "./Preloader.module.scss"
import CircularProgress from '@mui/material/CircularProgress';

export function Preloader (){
    return (
        <div className={styles.preloaderContainer} >
            <div className={styles.progress}>
                <CircularProgress size={50}/>
            </div>
        </div>)
}