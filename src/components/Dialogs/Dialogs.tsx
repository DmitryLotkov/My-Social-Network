import React from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {IndexPropsType} from "../../App";

export function Dialogs(props:IndexPropsType) {
    let messagesElements = props.messages?.map((m)=> <Message key={m.id} message={m.message}
                                                              id={m.id}/>)

    return(
        <div className={styles.AllMessages}>
            <div className={styles.dialogs}>
                <DialogItem dialogs={props.dialogs}/>
            </div>

            <div className={styles.messages}>
                {messagesElements}

            </div>
        </div>


    )
}
