import {addPostActionAC, updateNewPostTextAC} from "../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {AppRootState} from "../../Redux/reduxStore";
import {connect} from "react-redux";
import {Dispatch} from "redux";


/*type MyPostsPropsType = {

    oldStore: AppStoreType
}*/

/*export function MyPostsContainer(props: MyPostsPropsType) {

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

let mapStateToProps = (state:AppRootState) => {
    return {
        newPostText: state.ProfilePage.NewPostText,
        postsData: state.ProfilePage.postsData,
    }
}
let mapDispatchToProps = (dispatch:Dispatch) =>{
    return {
        updateNewPostText: (text: string) =>{
            dispatch(updateNewPostTextAC(text));
        },
        addPost: () => {
            dispatch(addPostActionAC());
            dispatch(updateNewPostTextAC(""));

        }
    }
}
export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)
