import {v1} from "uuid";
import {ActionsTypes} from "./ActionsTypes";

export const addMessageAC = (text: string) => {
    return {
        type: "ADD-DIALOG-MESSAGE",
        text
    } as const
}

export type MessagesType = {
    id: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
    avatar: string
    message: string
}
export type DialogsStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
let initialState: DialogsStateType = {

    dialogs: [
        {
            id: v1(),
            name: "Boris Jonson",
            avatar: "https://themified.com/friend-finder/images/users/user-4.jpg",
            message: "What is the weather forecast for tomorrow?"
        },

    ],
    messages: [
        {id: v1(), message: "Looks like it will be sunny tomorrow=)"}
    ]
}

const dialogsReducer = (state: DialogsStateType = initialState, action: ActionsTypes): DialogsStateType => {
    switch (action.type) {
        case "ADD-DIALOG-MESSAGE": {
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: action.text}]
            };
        }

        default:
            return state
    }

}
export default dialogsReducer;