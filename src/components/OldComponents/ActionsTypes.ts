import {
    addPostActionAC, deletePostAC, savePhotoAC,
    setStatusAC,
    setUserProfileAC,
    updateNewPostTextAC
} from "../../Redux/ProfileReducer";
import {addMessageAC} from "../../Redux/DialogsReducer";
import {
    followSuccessAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC, toggleFollowingProgressAC,
    toggleIsFetchingAC,
    unFollowSuccessAC
} from "../../Redux/UsersReducer";



export type ActionsTypes = ReturnType<typeof addPostActionAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof followSuccessAC>|
    ReturnType<typeof unFollowSuccessAC>|
    ReturnType<typeof setUsersAC>|
    ReturnType<typeof setCurrentPageAC>|
    ReturnType<typeof setUsersTotalCountAC>|
    ReturnType<typeof toggleIsFetchingAC>|
    ReturnType<typeof setUserProfileAC>|
    ReturnType<typeof toggleFollowingProgressAC>|
    ReturnType<typeof savePhotoAC>|
    ReturnType<typeof setStatusAC> |
    ReturnType<typeof deletePostAC>







