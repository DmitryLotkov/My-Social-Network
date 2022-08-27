import React, {useEffect, useState} from "react";
import {TextAreaForm} from "../../components/Common/TextAreaForm/TextAreaForm";
import {ChatMessageType} from "../../api/chatAPI";
import {useDispatch} from "react-redux";
import {sendMessageTC, startMessagesListeningTC, stopMessagesListeningTC} from "../../store/chatReducer";
import {useAppSelector} from "../../store/store";





const ChatPage = () => {
    return (
        <div style={{width: "65%"}}>
            <Chat/>
        </div>
    )
}

const Chat = () => {
   /* const [readyStatus, setReadyStatus] = useState<"pending" | "ready">("pending");
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);
    const [channelStatus, setChannelStatus] = useState<"connected" | "disconnected">("connected");*/
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startMessagesListeningTC());
        return () => {
            dispatch(stopMessagesListeningTC())
        }
    }, [dispatch])

    const sendMessageHandler = (message: string) => dispatch(sendMessageTC(message));

    return (
        <div>
            <Messages/>
            <TextAreaForm
                //webSocketStatus={wsChannel === null || readyStatus !== "ready" || channelStatus === "disconnected"}
                placeholderText={"Enter a message"}
                callBack={sendMessageHandler}/>
        </div>
    );
};



const Messages = () => {
    const messages = useAppSelector(state => state.ChatPage.messages)

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