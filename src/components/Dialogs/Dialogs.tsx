import React from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../Redux/state";

type DialogsPropsType = {
    DialogPage: DialogPageType
}

export function Dialogs(props: DialogsPropsType) {

    /*let newMessage = React.createRef<HTMLTextAreaElement>();
    let DialogsPostOnchange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        updateNewPostText(e.currentTarget.value);
        console.log(e.currentTarget.value);
    }
    const onclickHandler = () => {

    }*/

    let messagesElements = props.DialogPage.messages.map((m) => <Message key={m.id}
                                                                         message={m.message}
                                                                         id={m.id}/>)
    return (
        <div className={styles.AllMessages}>
            <div className={styles.dialogs}>
                <DialogItem DialogPage={props.DialogPage}/>
            </div>
            {/*<div>
                <textarea ref={newMessage} onChange={DialogsPostOnchange}/>
                <button onClick={onclickHandler}>Add Message</button>
            </div>*/}
            <div className={styles.messages}>
                {messagesElements}

            </div>
        </div>


    )
}
