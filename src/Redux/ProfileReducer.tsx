import {v1} from "uuid";
import {ActionsTypes} from "./store";


export type ProfilePageType = {
    postsData: Array<PostType>
    NewPostText: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
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

let initialState: ProfilePageType = {
    NewPostText: "",
    postsData: [
        {id: v1(), message: "How are you?", likesCount: 11},
        {id: v1(), message: "What is your name?", likesCount: 16},
        {id: v1(), message: "What are you waiting for?", likesCount: 11},
    ]
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
                NewPostText: action.newText};
        }
        default:
            return state;
    }
}
export default profileReducer