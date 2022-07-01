import {
    addPostActionAC, deletePostAC,
    setMyProfilePhotoAC, setStatusAC,
    setUserProfileAC,
    updateNewPostTextAC
} from "./ProfileReducer";
import {addMessageAC} from "./DialogsReducer";
import {
    followSuccess,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC, toggleFollowingProgressAC,
    toggleIsFetchingAC,
    unFollowSuccess
} from "./UsersReducer";



export type ActionsTypes = ReturnType<typeof addPostActionAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof followSuccess>|
    ReturnType<typeof unFollowSuccess>|
    ReturnType<typeof setUsersAC>|
    ReturnType<typeof setCurrentPageAC>|
    ReturnType<typeof setUsersTotalCountAC>|
    ReturnType<typeof toggleIsFetchingAC>|
    ReturnType<typeof setUserProfileAC>|
    ReturnType<typeof toggleFollowingProgressAC>|
    ReturnType<typeof setMyProfilePhotoAC>|
    ReturnType<typeof setStatusAC> |
    ReturnType<typeof deletePostAC>







