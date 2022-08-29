import React, {useEffect, useState} from "react";
import {Chat} from "./Chat";
import styles from "./ChatPage.module.scss"
import {IconButton} from "@mui/material";
import MinimizeIcon from '@mui/icons-material/Minimize';
import {useAppSelector} from "../../store/store";
import {ChatMessageType, StatusType} from "../../store/chatReducer";

const ChatPage = React.memo(() => {
    const myId = useAppSelector(state => state.Auth.data.id);
    const messages = useAppSelector(state => state.ChatPage.messages).filter(m => m.userId !== myId);
    const status = useAppSelector<StatusType>(state => state.ChatPage.status);

    const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
    const [startMessages, setStartMessages] = useState<ChatMessageType[]>(messages);
    const newMessagesCount = messages.length - startMessages.length;

    const collapseChat = () => {
        setIsChatOpen(!isChatOpen);
        setStartMessages(messages) //удалим флаг новых сообщений, засинхронизировав стейт по клику на кнопку свенуть
    };
    /*console.log(newMessagesCount)
    console.log("startMessages", startMessages.length)
    console.log("newMessages", messages.length)*/

    useEffect(() => {
        if (status === 'ready' && startMessages.length === 0) {
            setStartMessages(messages)
        }
    }, [status, messages]);

    return (
        <div className={isChatOpen ? styles.chatPageBlockOpen : styles.chatPageBlockCollapsed}>
            <div className={styles.chatTitle}>
                <div>Public chat</div>
                <div className={newMessagesCount > 0 && !isChatOpen ? styles.messageFlag : styles.noMessageFlag}>
                    <div>{newMessagesCount}</div>
                </div>
                <IconButton onClick={collapseChat} className={styles.minimizeIcon}>
                    <MinimizeIcon/>
                </IconButton>
            </div>
            <Chat/>
        </div>
    )
})

export default ChatPage