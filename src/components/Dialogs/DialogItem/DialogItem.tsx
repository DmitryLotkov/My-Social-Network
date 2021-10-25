import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {RootStateType} from "../../../Redux/state";


export function DialogItem(props: RootStateType) {
    let dialogItem = props.DialogPage?.dialogs.map(m => <div><img key={m.id} src={m.avatar}  alt={"dialogAvatar"}/>
        <NavLink
                 to={"/dialogs/" + m.id}>{m.name}
        </NavLink></div>)
    return (
        <div className={styles.dialog + " " + styles.active}>

            {dialogItem}
        </div>
    );
}