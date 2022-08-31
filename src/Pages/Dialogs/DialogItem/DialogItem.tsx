import styles from "../Dialogs.module.scss";
import React from "react";
import {DialogsStateType} from "../../../store/DialogsReducer";


type DialogItemPropsType = {
    DialogPage: DialogsStateType
}

export function DialogItem(props: DialogItemPropsType) {

    let dialogItem = props.DialogPage.dialogs.map(m =>
        <div className={styles.dialogItem} key={m.id}>
            <div className={styles.userAvatarAndName}>
                    <img src={m.avatar}
                        alt={"friendAvatar"}/>
                <strong>{m.name}</strong>
                <div className={styles.jobDescription}>Product manager</div>
            </div>
            <div>{m.message}</div>
        </div>
    )
    return (
        <>
            {dialogItem}
        </>
    );
}