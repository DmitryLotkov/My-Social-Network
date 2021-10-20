import React from "react";
import styles from "./Dialogs.module.css"
import {v1} from "uuid";
import {Dialog} from "./Dialog";


const dialogs = [
    {id: v1(), name: "Dmitry Lomonosov"},
    {id: v1(), name: "Sarah Konor"},
    {id: v1(), name: "Anton Dovgalo"},
    {id: v1(), name: "Ann Moshanskaya"},
];

const messages = [
    {id: v1(), message: "What is the weather forecast for tomorrow?"},
    {id: v1(), message: "It seems to bee good)"},
    {id: v1(), message: "Do you know Sarah?"},
    {id: v1(), message: "How are you?"},
    {id: v1(), message: "What are you waiting for?"},
];

export function Message (props: any) {
    return (
        <div className={styles.messages}>{props.message} </div>
    )
}


export function Dialogs() {
    let messagesElements = messages.map((m)=> <Message message={m.message}/>)

    return(
        <div className={styles.AllMessages}>
            <div className={styles.dialogs}>
                <Dialog AllChats={dialogs}/>
            </div>

            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>


    )
}
