import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../components/api";
import {ActionsTypes} from "./ActionsTypes";


//types
export enum ACTIONS_TYPE {
    SET_PROFILE = "PROFILE/SET-PROFILE",
    ADD_POST = "ADD-POST",
    SET_MY_PROFILE_PHOTO = "PROFILE/SET-MY-PROFILE_PHOTO",
    UPDATE_NEW_POST_TEXT = "PROFILE/UPDATE-NEW-POST-TEXT",
    SET_SOME_USER_PROFILE = "PROFILE/SET-SOME-USER-PROFILE",
    SET_STATUS = "PROFILE/SET-STATUS",
    DELETE_POST = "PROFILE/DELETE-POST"
}

export type PostTextType = {
    text: string
}
export type ProfilePageType = {
    postsData: Array<PostType>
    profile: ProfileDataType
    photo: string | undefined
    status: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type userProfileContactType = {
    facebook: string | undefined
    website: string | null
    vk: string | undefined
    twitter: string | undefined
    instagram: string | undefined
    youtube: string | undefined
    github: string | null | undefined
    mainLink: string | null
}
export type userProfilePhotosType = {
    small: string | undefined
    large: string | undefined
}
export type ProfileDataType = {
    aboutMe: string | null
    contacts: userProfileContactType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    photos: userProfilePhotosType

}

//actions
export const addPostActionAC = (data: string) => ({type: ACTIONS_TYPE.ADD_POST, data} as const)
export const updateNewPostTextAC = (text: PostTextType) => ({type: ACTIONS_TYPE.UPDATE_NEW_POST_TEXT, text} as const)
export const setUserProfileAC = (profile: ProfileDataType) => ({
    type: ACTIONS_TYPE.SET_SOME_USER_PROFILE,
    profile
} as const);
export const setMyProfilePhotoAC = (photo: string | undefined) => ({
    type: ACTIONS_TYPE.SET_MY_PROFILE_PHOTO,
    photo
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
    photo: "",
    profile: {
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
export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_POST: {
            return {
                ...state,
                postsData: [...state.postsData, {id: v1(), message: action.data, likesCount: 0}]
            };
        }
        case ACTIONS_TYPE.SET_SOME_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case ACTIONS_TYPE.SET_MY_PROFILE_PHOTO: {
            return {...state, photo: action.photo}
        }
        case ACTIONS_TYPE.SET_STATUS: {
            return {...state, status: action.status}
        }
        case ACTIONS_TYPE.DELETE_POST:
            return {...state, postsData: state.postsData.filter(post => post.id !== action.id)}
        default:
            return state;
    }
}
//thunks
export const getProfileTC = (userId: number | null) => async (dispatch: Dispatch) => {

    let res = await profileAPI.getProfile(userId);
    try {
        dispatch(setUserProfileAC(res.data));
    } catch (error: any) {
        console.log(error.message)
    }

}

export const getUserStatusTC = (userId: number | null) => async (dispatch: Dispatch) => {

    let res = await profileAPI.getStatus(userId);
    try {
        if (res.status === 200) {
            dispatch(setStatusAC(res.data));
        }
    } catch (error: any) {
        console.log(error.message)
    }

}


export const updateUserStatusTC = (status: string) => async (dispatch: Dispatch) => {

    let res = await profileAPI.updateStatus(status)
    try {
        if (res.data.resultCode === 0) {
            dispatch(setStatusAC(status))
        }
    } catch (error: any) {
        console.log(error.message)
    }
}

