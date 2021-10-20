import styles from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type ChatPropsType ={
    id: string
    name: string
}
type ChatsPropsType = {
    AllChats: Array<ChatPropsType>
}
export function Dialog(props: ChatsPropsType) {
    let dialogItem = props.AllChats.map(m => <div><NavLink to={"/dialogs/" +m.id}>{m.name}</NavLink></div>)
    return (
        <div className={styles.dialog + " " + styles.active}>
            {dialogItem}
        </div>
    );
}