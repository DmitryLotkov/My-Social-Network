import {v1} from "uuid";
import {ActionsTypes} from "../components/OldComponents/OldStore";

type ProfilePageType = {
    postsData: Array<PostType>
    NewPostText: string
    profile: userProfileType
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
type userProfilePhotosType = {
    small: string | undefined
    large: string | undefined
}
export type userProfileType = {
    aboutMe: string | null
    contacts: userProfileContactType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number | null
    photos: userProfilePhotosType
}

export const addPostActionAC = () => {
    return {
        type: "ADD-POST",
    } as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: text
    } as const
}
export const setUserProfileAC = (profile: userProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile: profile
    } as const
}
let initialState: ProfilePageType = {
    NewPostText: "",
    postsData: [
        {id: v1(), message: "How are you?", likesCount: 11},
        {id: v1(), message: "What is your name?", likesCount: 16},
        {id: v1(), message: "What are you waiting for?", likesCount: 11},
    ],
    profile: {
        fullName: "",
        lookingForAJob: false,
        lookingForAJobDescription: "",
        userId: null,
        aboutMe: "",
        contacts: {
            facebook: "",
            github: "",
            instagram: "",
            mainLink: "",
            twitter: "",
            vk: "",
            website: "",
            youtube: ""
        },
        photos:
            {
                small: "",
                large: ""
            }
    }
}
const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            return {
                ...state,
                postsData: [...state.postsData, {id: v1(), message: state.NewPostText, likesCount: 0}]
            };
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                NewPostText: action.newText
            };
        }
        case "SET-USER-PROFILE": {
            return {
                ...state, profile: action.profile
            }
        }

        default:
            return state;
    }
}
export default profileReducer