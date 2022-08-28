import React, {useEffect, useRef, useState} from "react";
import {TextAreaForm} from "../../components/Common/TextAreaForm/TextAreaForm";
import {ChatMessageAPIType} from "../../api/chatAPI";
import {useDispatch} from "react-redux";
import {sendMessageTC, startMessagesListeningTC, StatusType, stopMessagesListeningTC} from "../../store/chatReducer";
import {useAppSelector} from "../../store/store";





const ChatPage = () => {
    return (
        <div style={{width: "65%"}}>
            <Chat/>
        </div>
    )
}

const Chat = React.memo(() => {

    const status = useAppSelector<StatusType>(state => state.ChatPage.status);
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
            {status === "error" && <div>Some error occurred. Please refresh the gage</div>}
           <>
                <Messages/>
                <TextAreaForm webSocketStatusDisabled={status !== "ready"}
                    placeholderText={"Enter a message"}
                    callBack={sendMessageHandler}/>
          </>

        </div>
    );
});



const Messages = React.memo(() => {
    const[isAutoScroll, setIsAutoScroll] = useState(false);
    const messages = useAppSelector(state => state.ChatPage.messages);
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const scrollHandler = (e:React.UIEvent<HTMLDivElement, UIEvent>) =>{
        const element = e.currentTarget;
        if(Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300){
            !isAutoScroll && setIsAutoScroll(true)
        }
        else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(()=>{
        if(isAutoScroll){
            messagesAnchorRef.current?.scrollIntoView({behavior: "smooth"});
        }

    }, [messages, isAutoScroll])
    return (
        <div style={{height: "400px", overflowY: "auto"}} onScroll={scrollHandler}>
            {messages.map(m => <Message message={m} key={m.id}/>)}
            <div ref={messagesAnchorRef}/>
        </div>
    );
});

type MessagePropsType = {
    message: ChatMessageAPIType
}
const Message = React.memo(({message}: MessagePropsType) => {

    return (
        <div style={{border: "1px solid  black"}}>

            <img src={message.photo} style={{width: "40px", marginRight: "10px"}} alt={"chatUserPhoto"}/>
            <b style={{marginRight: "10px"}}>{message.userName}</b>
            <span>{message.message}</span>
            <hr/>
        </div>
    );
});


export default ChatPage