import {ChatMessageAPIType} from "../../api/chatAPI";
import React from "react";
import styles from "./Message.module.scss"
import {useAppSelector} from "../../store/store";
type MessagePropsType = {
    message: ChatMessageAPIType
    userId: number
}
export const Message = React.memo(({message, userId}: MessagePropsType) => {
    const myId = useAppSelector<number>(state => state.Auth.data.id);

    return (
        <div className={styles.devChatMessageBlock}>
            <div className={myId === userId ? styles.myImgAndMessage: styles.someUserImgAndMessage}>
                {myId === userId
                    ? <>
                    <div className={myId === userId ? styles.myNameAndMessage : styles.someUserNameAndMessage}>
                        <div className={styles.userName}>{message.userName}</div>
                        <div>{message.message}</div>
                    </div>
                    <img style={{marginLeft: "10px"}} src={message.photo} alt={"chatUserPhoto"}/>
                </>
                :<>
                    <img src={message.photo} alt={"chatUserPhoto"}/>
                    <div className={myId === userId ? styles.myNameAndMessage : styles.someUserNameAndMessage}>
                        <div className={styles.userName}>{message.userName}</div>
                        <div>{message.message}</div>
                    </div>
                </>
                }
            </div>
        </div>
    );
});