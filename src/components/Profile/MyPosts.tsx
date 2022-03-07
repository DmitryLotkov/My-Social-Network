import React, {ChangeEvent} from "react";
import {Post} from "./MyPosts/Post/Post";
import styles from "./MyPosts.module.css"
import {PostType} from "../OldComponents/OldStore";


type MyPostsPropsType = {
    updateNewPostText: (text: string) => void
    postsData: Array<PostType>
    addPost: () => void
    newPostText: string
}

export const MyPosts = React.memo((props: MyPostsPropsType)=> {

    let postsElements = props.postsData.map(p => <Post key={p.id}
                                                       message={p.message}
                                                       likeCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        /*if(newPostElement.current){
            text = newPostElement.current.value;}*/
        /*let text =  newPostElement.current && newPostElement.current.value*/
        props.addPost();
    }
    const onchangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (

        <div className={styles.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    ref={newPostElement}
                    onChange={onchangeHandler}
                    autoFocus={true}
                    value={props.newPostText}
                />
            </div>
            <div>
                <button onClick={onAddPost}>Publish</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>

    );
})