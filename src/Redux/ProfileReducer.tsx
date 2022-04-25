import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../components/api";
import {ActionsTypes} from "./ActionsTypes";
import {myUserID} from "./AuthReducer";


export enum ACTIONS_TYPE {
    SET_PROFILE = "SET-PROFILE",
    ADD_POST = "ADD-POST",
    SET_MY_PROFILE_PHOTO = "SET-MY-PROFILE_PHOTO",
    UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
    SET_SOME_USER_PROFILE = "SET-SOME-USER-PROFILE",
    SET_STATUS = "SET-STATUS"
}
export type PostTextType = {
    text: string
}
type ProfilePageType = {
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
    userId: number
    photos: userProfilePhotosType

}
export const getProfileThunkCreator = (userId: number | null) => {
    return (dispatch: Dispatch) => {

        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfileAC(response.data));
            }).catch(() =>{
            console.log("Error in getProfile")
        })
    }
}
export const getUserStatusTC = (userId: number | null) => {
    return  (dispatch: Dispatch) => {

        profileAPI.getStatus(userId)

            .then(res =>{
                if(res.status === 200){
                    dispatch(setStatusAC(res.data));
                }
            }).catch(()=>{
            console.log("Error in getStatus")
        });

    }
}

export const updateUserStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {

        profileAPI.updateStatus(status)
            .then(res => {
                if(res.data.resultCode === 0){
                    dispatch(setStatusAC(status))
                }

            })

    }
}

export const addPostActionAC = (data: string) => {
    return {
        type: ACTIONS_TYPE.ADD_POST,
        data
    } as const
}
export const updateNewPostTextAC = (text: PostTextType) => {

    return {
        type: ACTIONS_TYPE.UPDATE_NEW_POST_TEXT,
        text
    } as const
}
export const setUserProfileAC = (profile: ProfileDataType) => {
    return {
        type: ACTIONS_TYPE.SET_SOME_USER_PROFILE,
        profile
    } as const
}
export const setMyProfilePhotoAC = (photo: string | undefined) => {
    return {
        type: ACTIONS_TYPE.SET_MY_PROFILE_PHOTO,
        photo
    } as const
}
export const setStatusAC = (status: string) => {
    return {
        type: ACTIONS_TYPE.SET_STATUS,
        status
    } as const

}
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
        lookingForAJob: false,
        lookingForAJobDescription: "",
        userId: myUserID,
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
const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_POST: {
            return {
                ...state,
                postsData: [...state.postsData, {id: v1(), message: action.data, likesCount: 0}]
            };
        }
        case "SET-SOME-USER-PROFILE": {
            return {
                ...state, profile: action.profile
            }
        }
        case "SET-MY-PROFILE_PHOTO": {
            return {
                ...state, photo: action.photo
            }
        }
        case "SET-STATUS": {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state;
    }
}
export default profileReducer