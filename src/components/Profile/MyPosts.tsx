import React from "react";
import {Post} from "./MyPosts/Post/Post";
import styles from "./MyPosts.module.scss"
import {PostType} from "../OldComponents/OldStore";
import { TextAreaForm } from "../Common/TextAreaForm/TextAreaForm";

export type MyPostsPropsType = {
    postsData?: Array<PostType>
    callBack: (text: string) => void
    placeholderText: string
}

export const MyPosts = React.memo((props: MyPostsPropsType) => {

    let postsElements = props.postsData?.map(p => <Post key={p.id}
                                                        message={p.message}
                                                        likeCount={p.likesCount}/>).reverse()
    return <div className={styles.postBlock}>
        <h3>New post</h3>
        <TextAreaForm placeholderText={props.placeholderText} callBack={props.callBack}/>
        <div className={styles.posts}>
            {postsElements}
        </div>
    </div>

})

