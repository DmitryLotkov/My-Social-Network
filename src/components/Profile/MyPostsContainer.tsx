import React from "react";
import {addPostActionAC, updateNewPostTextAC} from "../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {AppStoreType} from "../../Redux/reduxStore";


type MyPostsPropsType = {

    store: AppStoreType
}

export function MyPostsContainer(props: MyPostsPropsType) {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionAC())
        props.store.dispatch(updateNewPostTextAC(""))

    }
    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts
            newPostText={state.ProfilePage.NewPostText}
            postsData={state.ProfilePage.postsData}
            updateNewPostText={onPostChange}
            addPost={addPost}/>
    );
}