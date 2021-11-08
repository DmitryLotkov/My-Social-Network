import React from "react";
import styles from "./../Dialogs.module.css"


export type MessageType = {
    id: string
    message: string
}

export function Message (props: MessageType) {

    return (
        <div className={styles.messages}>
           {props.message}

        </div>
    );
}


