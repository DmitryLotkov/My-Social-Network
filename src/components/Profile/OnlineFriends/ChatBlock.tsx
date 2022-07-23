
import React from "react";
import chatStyles from "./ChatBlock.module.scss"
type OnlineFriendType = {
    id: string
    avatar: string
}
export function ChatBlock(props: OnlineFriendType) {

    return (
            <div className={chatStyles.onlineFriendsWrapper}>
                <img className={chatStyles.imgProfilePhoto} src={props.avatar} alt={"onlineFriendAvatar"}/>
                <span className={chatStyles.OnlineDot}/>
            </div>

    );
}