import React from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {RootStateType} from "../../Redux/state";

export function Dialogs(props: RootStateType) {

    let messagesElements = props.DialogPage?.messages.map((m) => <Message key={m.id} message={m.message}
                                                                           id={m.id}/>)
    return (
        <div className={styles.AllMessages}>
            <div className={styles.dialogs}>
                <DialogItem DialogPage={props.DialogPage}/>
            </div>

            <div className={styles.messages}>
                {messagesElements}

            </div>
        </div>


    )
}
