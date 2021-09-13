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
    return (
        <div className={styles.dialog + " " + styles.active}>
            <NavLink to={"/dialogs/" + props.AllChats[0].id}>{props.AllChats[0].name}</NavLink><br/>
            <NavLink to={"/dialogs/" + props.AllChats[1].id}>{props.AllChats[1].name}</NavLink><br/>
            <NavLink to={"/dialogs/" + props.AllChats[2].id}>{props.AllChats[2].name}</NavLink><br/>
            <NavLink to={"/dialogs/" + props.AllChats[3].id}>{props.AllChats[3].name}</NavLink><br/>
        </div>
    );
}