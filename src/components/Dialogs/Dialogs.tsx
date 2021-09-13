import React from "react";
import styles from "./Dialogs.module.css"
import {v1} from "uuid";
import {Dialog} from "./Dialog";


const chatsData = [
    {id: v1(), name: "Dmitry Lomonosov"},
    {id: v1(), name: "Sarah Konor"},
    {id: v1(), name: "Anton Dovgalo"},
    {id: v1(), name: "Ann Moshanskaya"},
];

const messagesData = [
    {id: v1(), message: "What is the weather forecast for tomorrow?"},
    {id: v1(), message: "It seems to bee good)"},
    {id: v1(), message: "Do you know Sarah?"},
    {id: v1(), message: "How are you?"},
];
export function Message (props: any) {
    return (
        <div className={styles.messages}>{props.message} </div>
    )
}


export function Dialogs() {
    return(
        <div className={styles.AllMessages}>
            <div className={styles.dialogs}>
                <Dialog AllChats={chatsData}/>
            </div>

            <div className={styles.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
            </div>
        </div>


    )
}
