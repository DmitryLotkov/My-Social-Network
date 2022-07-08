import {addPostActionAC, updateNewPostTextAC} from "../../Redux/ProfileReducer";
import {MyPosts} from "../Profile/MyPosts";
import {AppRootStateType} from "../../Redux/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


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

let mapStateToProps = (state:AppRootStateType) => {
    return {
        postsData: state.ProfilePage.postsData,
    }
}
let mapDispatchToProps = (dispatch:Dispatch) =>{
    return {

        addPost: () => {
            dispatch(addPostActionAC(""));
            dispatch(updateNewPostTextAC({text: ""}));

        }
    }
}
export const MyPostsContainerOld = connect (mapStateToProps, mapDispatchToProps)(MyPosts)
