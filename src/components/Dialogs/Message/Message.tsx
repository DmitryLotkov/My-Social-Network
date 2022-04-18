import React from "react";
import styles from "../Dialogs.module.scss"
import {MyProfilePhoto} from "../../Common/MyProfilePhoto/MyProfilePhoto";


export type MessageType = {
    id: string
    message: string
}

export function Message (props: MessageType) {

    return (
        <div className={styles.messagesWrapper}>
            <div className={styles.dialogItem}>{props.message}</div>
            <MyProfilePhoto/>
        </div>
    );
}


