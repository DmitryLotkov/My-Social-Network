import {v1} from "uuid";
import {ActionsTypes, PostType, ProfilePageType} from "./store";
export const addPostActionAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postMessage: postText
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
const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            if (action.postMessage) {
                const newPost: PostType = {
                    id: v1(), message: action.postMessage, likesCount: 0
                }
                state.postsData.push(newPost);
            }
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.NewPostText = action.newText;
            return state
        default:
            return state;
    }
}
export default profileReducer