import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogPageType} from "../../../Redux/store";

type DialogItemPropsType = {
    DialogPage: DialogPageType
}

export function DialogItem(props: DialogItemPropsType) {

    let dialogItem = props.DialogPage.dialogs.map(m => <div key={m.id}>
            <img src={m.avatar}
                 alt={"friendAvatar"}/>
        <NavLink
                 to={"/friendDialog/" + m.id}>{m.name}
        </NavLink>

    </div>
    )
    return (
        <div className={styles.dialog + " " + styles.active}>

            {dialogItem}
        </div>
    );
}