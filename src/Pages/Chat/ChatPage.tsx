import React, {useEffect, useState} from "react";
import {TextAreaForm} from "../../components/Common/TextAreaForm/TextAreaForm";


export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}


const ChatPage = () => {

    return (
        <div style={{width: "65%"}}>
            <Chat/>
        </div>
    )
}

const Chat = () => {
    const [readyStatus, setReadyStatus] = useState<"pending" | "ready">("pending");
    const [webChannel, setWebChannel] = useState<WebSocket | null>(null)


    function createChannel() {
        setWebChannel(new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"));
    }

    useEffect(() => {

    }, [webChannel])
    useEffect(() => {
        createChannel()
        webChannel?.addEventListener("open", () => {
            setReadyStatus("ready")
        })
    }, [])
    const sendMessage = (message: string) => webChannel?.send(message)

    return (
        <div>
            <Messages wssChannel={webChannel}/>
            <TextAreaForm webSocketStatus={readyStatus !== "ready"} placeholderText={"Enter a message"}
                          callBack={sendMessage}/>
        </div>
    );
};

type MessagesPropsType = {
    wssChannel: WebSocket | null
}

const Messages = ({wssChannel}: MessagesPropsType) => {
    const [messages, setMessages] = useState<Array<ChatMessageType>>([]);

    useEffect(() => {
        wssChannel?.addEventListener("message", (e) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages]) //data приходит как текст а не JSON. Поэтому парсим в JSON
        })
    }, [wssChannel])


    return (
        <div style={{height: "400px", overflowY: "auto"}}>

            {messages.map((m, index) => <Message message={m} key={index}/>)}
        </div>
    );
};

type MessagePropsType = {
    message: ChatMessageType
}
const Message = ({message}: MessagePropsType) => {

    return (
        <div style={{border: "1px solid  black"}}>

            <img src={message.photo} style={{width: "40px", marginRight: "10px"}} alt={"chatUserPhoto"}/>
            <b style={{marginRight: "10px"}}>{message.userName}</b>
            <span>{message.message}</span>
            <hr/>
        </div>
    );
};


export default ChatPage