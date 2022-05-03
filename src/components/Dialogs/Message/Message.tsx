import React from "react";
import styles from "../Dialogs.module.scss"
import {MyProfilePhoto} from "../../Common/MyProfilePhoto/MyProfilePhoto";


export type MessageType = {
    id: string
    message: string
}

export  const Message = React.memo((props: MessageType) =>{

    return (
        <div className={styles.messagesWrapper}>
            <p className={styles.dialogItem}>{props.message}</p>
            <MyProfilePhoto/>
        </div>
    );
})


