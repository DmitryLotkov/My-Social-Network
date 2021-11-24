import React, {ChangeEvent} from "react";
import {Post} from "./MyPosts/Post/Post";
import styles from "./MyPosts.module.css"
import {ActionsTypes, PostType} from "../../Redux/store";
import {addPostActionAC, updateNewPostTextAC} from "../../Redux/ProfileReducer";


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

    console.log(newPostElement)

    let addPost = () => {
        /*if(newPostElement.current){
            text = newPostElement.current.value;}*/
        /*let text =  newPostElement.current && newPostElement.current.value*/
        if (newPostElement.current) {

            props.dispatch(addPostActionAC(newPostElement.current?.value))
            props.dispatch(updateNewPostTextAC(""))

        }
    }
    const onchangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch( updateNewPostTextAC(e.currentTarget.value))
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