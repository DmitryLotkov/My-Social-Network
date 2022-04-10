import React from "react"
import style from "../Users/users.module.scss";
import {CircularProgress} from "@material-ui/core";

export function Preloader (){
    return (
        <div className={style.preloaderContainer}>
            <CircularProgress />
        </div>)
}