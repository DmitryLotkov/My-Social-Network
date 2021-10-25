import {OnlineFriendType} from "../../Redux/state";
import React from "react";
import chatStyles from "./ChatBlock.module.css"

export function ChatBlock(props: OnlineFriendType) {

    return (
            <div>
                <img className={chatStyles.imgProfilePhoto} src={props.avatar} alt={"onlineFriendAvatar"}/>
                <span className={chatStyles.OnlineDot}/>
            </div>

    );
}