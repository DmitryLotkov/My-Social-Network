import React, {useState} from "react";
import {Chat} from "./Chat";
import styles from "./ChatPage.module.scss"
import {IconButton} from "@mui/material";
import MinimizeIcon from '@mui/icons-material/Minimize';
const ChatPage = () => {
    const[isChatCollapsed, setIsChatCollapsed] = useState<boolean>(false);
    const collapseChat = () =>{
        setIsChatCollapsed(!isChatCollapsed)
    }
    return (
        <div className={styles.chatPageBlock}>
            <div className={styles.chatTitle}>
                <div>Developer chat</div>
                <IconButton onClick={collapseChat} className={styles.minimizeIcon}>
                    <MinimizeIcon/>
                </IconButton>
            </div>
            {isChatCollapsed && <Chat/>}
        </div>
    )
}

export default ChatPage