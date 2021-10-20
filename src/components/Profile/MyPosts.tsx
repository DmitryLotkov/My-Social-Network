import React from "react";
import {Post} from "./MyPosts/Post/Post";
import styles from "./MyPosts.module.css"
import {v1} from "uuid";


export function MyPosts() {

    const postsData = [
        {id: v1(), message: "How are you?", likesCount: 11},
        {id: v1(), message: "What is your name?", likesCount: 16},
        {id: v1(), message: "What are you waiting for?", likesCount: 11},
    ];
    let postsElements = postsData.map(p =><Post message={p.message} likeCount={p.likesCount}/>)
    return (

        <div className={styles.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea>Write what you wish</textarea>
            </div>
            <div>
                <button>Publish</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>

        </div>

    )
        ;
}