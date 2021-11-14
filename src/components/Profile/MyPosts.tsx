import React, {ChangeEvent} from "react";
import {Post} from "./MyPosts/Post/Post";
import styles from "./MyPosts.module.css"
import {ActionsTypes, PostType} from "../../Redux/state";


type MyPostsPropsType = {
    dispatch: (action: ActionsTypes) => void
    postsData: Array<PostType>,
    newPostText: string
}

export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.postsData.map(p => <Post key={p.id}
                                                       message={p.message}
                                                       likeCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        /*if(newPostElement.current){
            text = newPostElement.current.value;}*/
        /*let text =  newPostElement.current && newPostElement.current.value*/
        if (newPostElement.current) {
            props.dispatch({type:"ADD-POST",postMessage: newPostElement.current?.value})

            props.dispatch({type: "UPDATE-NEW-POST-TEXT",newText: ""});
        }
    }
    const onchangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type:"UPDATE-NEW-POST-TEXT", newText:e.currentTarget.value});
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
                <button onClick={addPost}>Publish</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>

        </div>

    )
        ;
}