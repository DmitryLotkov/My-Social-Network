import {v1} from "uuid";
import user4 from "./../Images/Users/user-4.jpg"



//types
export type MessagesType = {
    id: string
    message: string
}
export enum ACTIONS_TYPE {
    ADD_DIALOG_MESSAGE = "DIALOGS/ADD-DIALOG-MESSAGE",
}
export type DialogActionsType = ReturnType<typeof addMessageAC>
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
const initialState: DialogsStateType = {

    dialogs: [
        {
            id: v1(),
            name: "Kyle Fisher",
            avatar: user4,
            message: "What is the weather forecast for tomorrow?"
        },

    ],
    messages: [
        {id: v1(), message: "Looks like it will be sunny tomorrow=)"}
    ]
}
//reducer
export const dialogsReducer = (state: DialogsStateType = initialState, action: DialogActionsType): DialogsStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_DIALOG_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: action.text}]
            };
        }

        default:
            return state
    }

}

//action creators
export const addMessageAC = (text: string) => ({type: ACTIONS_TYPE.ADD_DIALOG_MESSAGE, text} as const)

