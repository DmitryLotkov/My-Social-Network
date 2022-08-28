import React, {useEffect} from "react";
import {useAppSelector} from "../../store/store";
import {sendMessageTC, startMessagesListeningTC, StatusType, stopMessagesListeningTC} from "../../store/chatReducer";
import {useDispatch} from "react-redux";
import {TextAreaForm} from "../../components/Common/TextAreaForm/TextAreaForm";
import {Messages} from "./Messages";

export const Chat = React.memo(() => {

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
                              placeholderText={"Press Ctrl + Enter to send message"}
                              callBack={sendMessageHandler}/>
            </>

        </div>
    );
});