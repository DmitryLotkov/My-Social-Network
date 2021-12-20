import {addPostActionAC, updateNewPostTextAC} from "../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../Redux/reduxStore";
import {connect} from "react-redux";
import {Dispatch} from "redux";


/*type MyPostsPropsType = {

    store: AppStoreType
}*/

/*export function MyPostsContainer(props: MyPostsPropsType) {

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
}*/

let mapStateToProps = (state:AppStateType) => {
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
