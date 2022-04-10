import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../components/api";
import {ActionsTypes} from "./ActionsTypes";



export enum ACTIONS_TYPE {
    SET_PROFILE = "SET-PROFILE",
    ADD_POST = "ADD-POST",
    SET_MY_PROFILE_PHOTO = "SET-MY-PROFILE_PHOTO",
    UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
}

type ProfilePageType = {
    postsData: Array<PostType>
    NewPostText: string
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
    userId: number | undefined
    photos: userProfilePhotosType

}
export const getProfileThunkCreator = (userId: number | undefined) => {
    return (dispatch: Dispatch) => {

        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfileAC(response.data));
            })
    }
}
export const getUserStatusThunkCreator = (userId: number | undefined) => {
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

export const updateUserStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch) => {

        profileAPI.updateStatus(status)
            .then(res => {
                if(res.data.resultCode === 0){
                    dispatch(setStatusAC(status))
                }

            })

    }
}

export const addPostActionAC = () => {
    return {
        type: ACTIONS_TYPE.ADD_POST,
    }
}
export const updateNewPostTextAC = (text: string) => {

    return {
        type: "UPDATE-NEW-POST-TEXT",
        text
    } as const
}
export const setUserProfileAC = (profile: ProfileDataType) => {
    return {
        type: "SET-SOME-USER-PROFILE",
        profile
    } as const
}
export const setMyProfilePhotoAC = (photo: string | undefined) => {
    return {
        type: "SET-MY-PROFILE_PHOTO",
        photo
    } as const
}
export const setStatusAC = (status: string) => {
    return {
        type: "SET-STATUS",
        status
    } as const

}
const initialState: ProfilePageType = {
    NewPostText: "",
    postsData: [
        {id: v1(), message: "How are you?", likesCount: 11},
        {id: v1(), message: "What is your name?", likesCount: 16},
        {id: v1(), message: "What are you waiting for?", likesCount: 11},
    ],
    status: "",
    photo: "",
    profile: {
        fullName: "",
        lookingForAJob: false,
        lookingForAJobDescription: "",
        userId: undefined,
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
                postsData: [...state.postsData, {id: v1(), message: state.NewPostText, likesCount: 0}]
            };
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                NewPostText: action.text
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