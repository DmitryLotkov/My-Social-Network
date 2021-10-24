import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {IndexPropsType} from "../../../App";

export function DialogItem(props: IndexPropsType) {
    let dialogItem = props.dialogs?.map(m => <div><NavLink to={"/dialogs/" +m.id}>{m.name}</NavLink></div>)
    return (
        <div className={styles.dialog + " " + styles.active}>
            {dialogItem}
        </div>
    );
}