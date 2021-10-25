import React from "react";
import {Post} from "./MyPosts/Post/Post";
import styles from "./MyPosts.module.css"
import {RootStateType} from "../../Redux/state";


export function MyPosts(props: RootStateType) {

    let postsElements = props.ProfilePage?.postsData.map(p => <Post key={p.id}
                                                                    message={p.message}
                                                                    likeCount={p.likesCount}/>)
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