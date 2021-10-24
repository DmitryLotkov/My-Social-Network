import React from "react";
import styles from "./Profile.module.css"
import {MyPosts} from "./MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {IndexPropsType} from "../../App";


export function Profile(props:IndexPropsType){
    return(
            <div className={styles.content}>
                <ProfileInfo/>
                <MyPosts postsData={props.postsData}/>
            </div>
    );
}