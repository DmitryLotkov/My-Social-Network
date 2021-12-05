import {v1} from "uuid";
import {ActionsTypes, PostType, ProfilePageType} from "./store";
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
const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            if (state.NewPostText) {
                const newPost: PostType = {
                    id: v1(), message: state.NewPostText, likesCount: 0
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