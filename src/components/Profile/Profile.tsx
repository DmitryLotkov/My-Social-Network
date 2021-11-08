import React from "react";
import styles from "./Profile.module.css"
import {MyPosts} from "./MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {PostType} from "../../Redux/state";
type ProfilePropsType = {
    addPostCallBack: (postMessage:string) => void
    postData: Array<PostType>,
    updateNewPostText: (postText: string) => void
    newPostText: string
}

export function Profile(props: ProfilePropsType){

    return(
            <div className={styles.content}>
                <ProfileInfo/>
                <MyPosts addPostCallBack={props.addPostCallBack}
                         postsData={props.postData}
                         updateNewPostText= {props.updateNewPostText}
                         newPostText={props.newPostText}/>
            </div>
    );
}