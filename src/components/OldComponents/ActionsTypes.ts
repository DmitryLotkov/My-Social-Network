import {
    savePhotoAC,
    setStatusAC,
    setUserProfileAC,
    updateNewPostTextAC
} from "../../store/ProfileReducer";
import {addMessageAC} from "../../store/DialogsReducer";
import {
    followSuccessAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC, toggleFollowingProgressAC,
    toggleIsFetchingAC,
    unFollowSuccessAC
} from "../../store/UsersReducer";



export type ActionsTypes =
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
    ReturnType<typeof setStatusAC>








