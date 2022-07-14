import {v1} from "uuid";
import {profileAPI} from "../components/api";
import {AppStoreType, AppThunkDispatch} from "./store";
import {setAppStatusAC} from "./AppReducer";
import {handleNetworkError, handleServerAppError, handleServerNetworkError} from "../utils/error.utils";

//types
export enum ACTIONS_TYPE {
    SET_PROFILE = "PROFILE/SET-PROFILE",
    ADD_POST = "PROFILE/ADD-POST",
    SAVE_MY_PROFILE_PHOTO = "PROFILE/SAVE-MY-PROFILE_PHOTO",
    UPDATE_NEW_POST_TEXT = "PROFILE/UPDATE-NEW-POST-TEXT",
    SET_SOME_USER_PROFILE = "PROFILE/SET-SOME-USER-PROFILE",
    SET_STATUS = "PROFILE/SET-STATUS",
    DELETE_POST = "PROFILE/DELETE-POST",

}

export type ProfileActionsType =
    ReturnType<typeof addPostActionAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof savePhotoAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof deletePostAC>


export type PostTextType = {
    text: string
}
export type ProfilePageType = {
    postsData: Array<PostType>
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
    AboutMe?: string
    aboutMe?: string
    lookingForAJob: boolean
    lookingForAJobDescription?: string
    LookingForAJobDescription?: string
    fullName?: string
    FullName?: string
    contacts: UserProfileContactType
    photos?: userProfilePhotosType

}

//actions
export const addPostActionAC = (data: string) => ({type: ACTIONS_TYPE.ADD_POST, data} as const)
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
export const deletePostAC = (id: string) => ({type: ACTIONS_TYPE.DELETE_POST, id} as const);


const initialState: ProfilePageType = {

    postsData: [
        {id: v1(), message: "Do you have a job for me? What if I find it?", likesCount: 0},
        {id: v1(), message: "I want to be a serious frontend developer.", likesCount: 0},
        {id: v1(), message: "What is the good weather today,isn't it?", likesCount: 0},
    ],
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
        case ACTIONS_TYPE.ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {id: v1(), message: action.data, likesCount: 0}]
            };
        case ACTIONS_TYPE.SET_SOME_USER_PROFILE:
            return {...state, profile: action.profile}
        case ACTIONS_TYPE.SET_STATUS:
            return {...state, status: action.status}
        case ACTIONS_TYPE.SAVE_MY_PROFILE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos}}
        case ACTIONS_TYPE.DELETE_POST:
            return {...state, postsData: state.postsData.filter(post => post.id !== action.id)}
        default:
            return state;
    }
}
//thunks
export const getProfileTC = (userId: number | null) => async (dispatch: AppThunkDispatch) => {
    dispatch(setAppStatusAC("loading"));
    let res = await profileAPI.getProfile(userId);
    try {
        dispatch(setUserProfileAC(res.data));
        dispatch(setAppStatusAC("succeeded"));
    } catch (error: any) {
        handleNetworkError(error, dispatch);
    }

}

export const getUserStatusTC = (userId: number | null) => async (dispatch: AppThunkDispatch) => {
    dispatch(setAppStatusAC("loading"));
    let res = await profileAPI.getStatus(userId);
    try {
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
    let res = await profileAPI.updateStatus(status)
    try {
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
    let res = await profileAPI.uploadAvatar(photoFile)
    try {
        if (res.data.resultCode === 0) {
            dispatch(setAppStatusAC("succeeded"));
            dispatch(await getProfileTC(userId))
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
    let res = await profileAPI.updateProfile(profile)
    const userId = getState().Auth.data.id;
    try {
        if (res.data.resultCode === 0) {
            dispatch(await getProfileTC(userId))
            dispatch(setAppStatusAC("succeeded"));
        } else {
            handleServerAppError(res.data, dispatch);
        }
    } catch (error: any) {
        console.log("Error when you try update profile", error)
        handleServerNetworkError(error, dispatch)
    }
}

