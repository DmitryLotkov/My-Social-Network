import React from "react";
/*import {updateNewPostTextAC} from "../../store/ProfileReducer";
import {AppRootStateType} from "../../store/store";
import {Dispatch} from "redux";
import {addPostActionAC} from "../../store/UserPostsReducer";*/


/*type MyPostsPropsType = {

    oldStore: AppStoreType
}*/

/*export function MyPostsContainerOld(props: MyPostsPropsType) {

    let state = props.oldStore.getState();

    let addPost = () => {
        props.oldStore.dispatch(addPostActionAC())
        props.oldStore.dispatch(updateNewPostTextAC(""))

    }
    const onPostChange = (text: string) => {
        props.oldStore.dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts
            newPostText={state.ProfilePage.NewPostText}
            postsData={state.ProfilePage.postsData}
            updateNewPostText={onPostChange}
            addPost={addPost}/>
    );
}*/

/*let mapStateToProps = (state:AppRootStateType) => {
    return {
        postsData: state.ProfilePage,
    }
}
let mapDispatchToProps = (dispatch:Dispatch) =>{
    return {

        addPost: () => {
            dispatch(addPostActionAC(""));
            dispatch(updateNewPostTextAC({text: ""}));

        }
    }
}*/
/*export const MyPostsContainerOld = connect (mapStateToProps, mapDispatchToProps)(MyPosts)*/
