import {profileAPI} from "../api/api";
import {AppStoreType, AppThunkDispatch} from "./store";
import {setAppStatusAC} from "./AppReducer";
import {handleNetworkError, handleServerAppError, handleServerNetworkError} from "../utils/error.utils";
import {setMyProfileAC} from "./AuthReducer";

//types
enum ACTIONS_TYPE {
    SET_PROFILE = "PROFILE/SET-PROFILE",
    SAVE_MY_PROFILE_PHOTO = "PROFILE/SAVE-MY-PROFILE_PHOTO",
    UPDATE_NEW_POST_TEXT = "PROFILE/UPDATE-NEW-POST-TEXT",
    SET_SOME_USER_PROFILE = "PROFILE/SET-SOME-USER-PROFILE",
    SET_STATUS = "PROFILE/SET-STATUS",

}

export type ProfileActionsType =
     ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof savePhotoAC>
    | ReturnType<typeof setStatusAC>



export type PostTextType = {
    text: string
}
export type ProfilePageType = {

    profile: ProfileDataType
    status: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type UserProfileContactType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type userProfilePhotosType = {
    small: string
    large: string
}
export type ProfileDataType = {
    userId: number,
    aboutMe?: string
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts: Partial<UserProfileContactType>
    photos?: userProfilePhotosType
}

//actions
export const updateNewPostTextAC = (text: PostTextType) => ({type: ACTIONS_TYPE.UPDATE_NEW_POST_TEXT, text} as const)
export const setUserProfileAC = (profile: ProfileDataType) => ({
    type: ACTIONS_TYPE.SET_SOME_USER_PROFILE,
    profile
} as const);
export const savePhotoAC = (photos: userProfilePhotosType) => ({
    type: ACTIONS_TYPE.SAVE_MY_PROFILE_PHOTO,
    photos
} as const);
export const setStatusAC = (status: string) => ({type: ACTIONS_TYPE.SET_STATUS, status} as const);


const initialState: ProfilePageType = {
    status: "",
    profile: {
        userId: 0,
        fullName: "",
        lookingForAJob: true,
        lookingForAJobDescription: "",
        aboutMe: "",
        contacts: {
            facebook: "",
            github: "",
            instagram: "",
            mainLink: "",
            twitter: "",
            vk: "",
            website: "",
            youtube: "",
        },
        photos:
            {
                small: "",
                large: "",
            }
    }
}
export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_SOME_USER_PROFILE:
            return {...state, profile: action.profile}
        case ACTIONS_TYPE.SET_STATUS:
            return {...state, status: action.status}
        case ACTIONS_TYPE.SAVE_MY_PROFILE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state;
    }
}
//thunks
export const getProfileTC = (userId: number | null, isMyProfile?: boolean) => async (dispatch: AppThunkDispatch) => {
    dispatch(setAppStatusAC("loading"));
    try {
        let res = await profileAPI.getProfile(userId);
        if (isMyProfile) {
            dispatch(setMyProfileAC(res.data))
        }
        else {
            dispatch(setUserProfileAC(res.data));
        }
        dispatch(setAppStatusAC("succeeded"));
    } catch (error: any) {
        handleNetworkError(error, dispatch);
    }

}

export const getUserStatusTC = (userId: number | null) => async (dispatch: AppThunkDispatch) => {
    dispatch(setAppStatusAC("loading"));

    try {
        let res = await profileAPI.getStatus(userId);
        if (res.status === 200) {
            dispatch(setStatusAC(res.data));
            dispatch(setAppStatusAC("succeeded"));
        } else {
            handleServerAppError(res.data, dispatch);
        }
    } catch (error: any) {
        console.log("Error when you try get user status", error)
        handleServerNetworkError(error, dispatch)
    }

}

export const updateUserStatusTC = (status: string) => async (dispatch: AppThunkDispatch) => {
    dispatch(setAppStatusAC("loading"));

    try {
        let res = await profileAPI.updateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setStatusAC(status))
            dispatch(setAppStatusAC("succeeded"));
        } else {
            handleServerAppError(res.data, dispatch);
        }
    } catch (error: any) {
        console.log("Error when you try update user status", error)
        handleServerNetworkError(error, dispatch)
    }
}

export const uploadAvatarTC = (photoFile: File) => async (dispatch: AppThunkDispatch, getState: () => AppStoreType) => {
    dispatch(setAppStatusAC("loading"));
    const userId = getState().Auth.data.id;

    try {
        let res = await profileAPI.uploadAvatar(photoFile)
        if (res.data.resultCode === 0) {
            dispatch(setAppStatusAC("succeeded"));
            await dispatch( getProfileTC(userId))
        } else {
            handleServerAppError(res.data, dispatch);
        }
    } catch (error: any) {
        console.log("Error when you try upload avatar", error)
        handleServerNetworkError(error, dispatch)
    }

}
export const updateProfileTC = (profile: ProfileDataType) => async (dispatch: AppThunkDispatch, getState: () => AppStoreType) => {

    dispatch(setAppStatusAC("loading"));

    const userId = getState().Auth.data.id;
    try {
        let res = await profileAPI.updateProfile(profile)
        if (res.data.resultCode === 0) {
            await dispatch( getProfileTC(userId, true))
            dispatch(setAppStatusAC("succeeded"));
        } else {
            handleServerAppError(res.data, dispatch);
        }
    } catch (error: any) {
        console.log("Error when you try update profile", error)
        handleServerNetworkError(error, dispatch)
    }
}

