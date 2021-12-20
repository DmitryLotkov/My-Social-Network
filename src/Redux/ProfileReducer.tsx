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
        case "ADD-POST":{
            const stateCopy = {...state, postsData:[...state.postsData]};
            if (stateCopy.NewPostText) {
                const newPost: PostType = {
                    id: v1(), message: stateCopy.NewPostText, likesCount: 0
                };
                stateCopy.postsData.push(newPost);
                //stateCopy.NewPostText = "";
            }
            return stateCopy;
        }
        case "UPDATE-NEW-POST-TEXT":{
            const stateCopy = {...state};
            stateCopy.NewPostText = action.newText;
            return stateCopy
        }
        default:
            return state;
    }
}
export default profileReducer