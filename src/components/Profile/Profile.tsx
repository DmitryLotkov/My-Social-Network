import React from "react";
import styles from "./Profile.module.css"
import {MyPosts} from "./MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionsTypes, PostType} from "../../Redux/state";
type ProfilePropsType = {
    dispatch: (action: ActionsTypes) => void
    postData: Array<PostType>,
    newPostText: string
}

export function Profile(props: ProfilePropsType){

    return(
            <div className={styles.content}>
                <ProfileInfo/>
                <MyPosts dispatch={props.dispatch}
                         postsData={props.postData}
                         newPostText={props.newPostText}/>
            </div>
    );
}