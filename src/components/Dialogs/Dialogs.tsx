import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsTypes,

    DialogPageType,

} from "../../Redux/state";
import {addMessageAC, updateNewMessageTextAC} from "../../Redux/DialogsReducer";

type DialogsPropsType = {
    DialogPage: DialogPageType
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

export function Dialogs(props: DialogsPropsType) {

    let newMessageText = React.createRef<HTMLTextAreaElement>();

    let DialogsPostOnchange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
        console.log(e.currentTarget.value);
    }
    let addNewMessageText = () => {
        if (newMessageText.current) {
            props.dispatch(addMessageAC(newMessageText.current?.value));
            props.dispatch(updateNewMessageTextAC(""));
        }
    }

    let messagesElements = props.DialogPage.messages.map((m) => <Message key={m.id}
                                                                         message={m.message}
                                                                         id={m.id}/>)


    return (
        <div className={styles.AllMessages}>
            <div className={styles.dialogs}>
                <DialogItem DialogPage={props.DialogPage}/>
            </div>
            <div className={styles.sendMessage}>
                <div className={styles.inputGroup}>
                    <textarea className={styles.textArea}
                              onChange={DialogsPostOnchange}
                              value={props.newMessageText}
                              autoFocus={true}
                              ref={newMessageText}/>
                </div>
                <span>
                    <button onClick={addNewMessageText}>Send</button>
                </span>
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>

            </div>
        </div>


    )
}
