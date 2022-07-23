import styles from "../Dialogs.module.scss";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsStateType} from "../../../store/DialogsReducer";


type DialogItemPropsType = {
    DialogPage: DialogsStateType
}

export function DialogItem(props: DialogItemPropsType) {

    let dialogItem = props.DialogPage.dialogs.map(m =>
        <div className={styles.dialogItem} key={m.id}>
            <div className={styles.userAvatarAndName}>
                <NavLink
                    to={"/friendDialog/" + m.id}>
                    <img src={m.avatar}
                         alt={"friendAvatar"}/>
                    {m.name}
                </NavLink>
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