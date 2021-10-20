import React from "react";
import styles from "./Dialogs.module.css"
import {v1} from "uuid";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


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


export function Dialogs() {
    let messagesElements = messages.map((m)=> <Message message={m.message} id={m.id}/>)

    return(
        <div className={styles.AllMessages}>
            <div className={styles.dialogs}>
                <DialogItem AllChats={dialogs}/>
            </div>

            <div className={styles.messages}>
                {messagesElements}

            </div>
        </div>


    )
}
