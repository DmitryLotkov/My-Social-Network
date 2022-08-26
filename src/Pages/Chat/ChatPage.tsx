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
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);
    const [channelStatus, setChannelStatus] = useState<"connected" | "disconnected">("connected");


    useEffect(() => {
        let ws: WebSocket;
        const closeHandler = () => {
            console.log("Close ws");
            setTimeout(createChannel, 3000);
            setChannelStatus("disconnected")
        }

        if (channelStatus === "disconnected") {
            alert("Web connection was interrupted")
        }

        function createChannel() {
            ws?.removeEventListener("close", closeHandler); // (проверка на "если вед сокет был, то удалим") при реконекте удаляем подписчик на старый веб сокет
            ws?.close(); // при реконекте закрываем старый веб сокет
            ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");
            ws.addEventListener("close", closeHandler);
            setWsChannel(ws);
            setChannelStatus("connected");

        }

        createChannel()
        return () => {
            ws.removeEventListener("close", closeHandler);
            ws.close();
        }
    }, [channelStatus])


    useEffect(() => {
        let openHandler = () => {
            setReadyStatus("ready");
        }
        wsChannel?.addEventListener("open", openHandler);
        return () => {
            wsChannel?.removeEventListener("open", openHandler); //отписываемся от старого веб сокета
        }
    }, [wsChannel])

    const sendMessage = (message: string) => wsChannel?.send(message);

    return (
        <div>
            <Messages wssChannel={wsChannel}/>
            <TextAreaForm
                webSocketStatus={wsChannel === null || readyStatus !== "ready" || channelStatus === "disconnected"}
                placeholderText={"Enter a message"}
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
        let messageHandler = (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages]) //data приходит как текст а не JSON. Поэтому парсим в JSON
        }
        wssChannel?.addEventListener("message", messageHandler)

        return () => wssChannel?.removeEventListener("message", messageHandler);

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