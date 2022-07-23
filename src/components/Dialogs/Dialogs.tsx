import React, {useCallback} from "react";
import styles from "./Dialogs.module.scss"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {addMessageAC, DialogsStateType} from "../../store/DialogsReducer";
import {TextAreaForm} from "../Common/TextAreaForm/TextAreaForm";
import {placeholderText} from "../Common/TextAreaForm/textAreaData";
import {useDispatch} from "react-redux";

type DialogsPropsType = {
    DialogPage: DialogsStateType
}

export const Dialogs = React.memo((props: DialogsPropsType) => {
    const dispatch = useDispatch();
    const messagesElements = props.DialogPage.messages.map((m) => <Message key={m.id}
                                                                           message={m.message}
                                                                           id={m.id}/>)
    const addMessage = useCallback((text: string) => {
        dispatch(addMessageAC(text));
    }, [dispatch]);

    return (
        <div className={styles.dialogsWrapper}>
            <DialogItem DialogPage={props.DialogPage}/>
            {messagesElements}
            <TextAreaForm callBack={addMessage}
                          placeholderText={placeholderText.dialogsAreaText}/>
        </div>


    )
})
