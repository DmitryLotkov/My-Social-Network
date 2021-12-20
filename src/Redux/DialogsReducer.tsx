import {ActionsTypes} from "./store";
import {v1} from "uuid";

export const addMessageAC = () => {
    return {
        type: "ADD-DIALOG-MESSAGE",
    } as const
}
export const updateNewMessageTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newText: text
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
}
export type DialogsStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
let initialState: DialogsStateType = {
        newMessageText: "",
        dialogs: [
            {
                id: v1(),
                name: "Dmitry Lomonosov",
                avatar: "https://themified.com/friend-finder/images/users/user-4.jpg"
            },
            {id: v1(), name: "Sarah Konor", avatar: "https://themified.com/friend-finder/images/users/user-3.jpg"},
            {
                id: v1(),
                name: "Anton Dovgalo",
                avatar: "https://themified.com/friend-finder/images/users/user-6.jpg"
            },
            {
                id: v1(),
                name: "Maya Vishnevskaya",
                avatar: "https://themified.com/friend-finder/images/users/user-2.jpg"
            },
        ]
        ,
        messages: [
            {id: v1(), message: "What is the weather forecast for tomorrow?"},
            {id: v1(), message: "It seems to bee good)"},
            {id: v1(), message: "Do you know Sarah?"},
            {id: v1(), message: "How are you?"},
            {id: v1(), message: "What are you waiting for?"},
        ],
    }

const dialogsReducer = (state: DialogsStateType = initialState, action: ActionsTypes):DialogsStateType => {
    switch (action.type) {
        case "ADD-DIALOG-MESSAGE":{
            let copyState = {...state, messages: [...state.messages]};
            if (copyState.newMessageText) {
                const newMessage: MessagesType = {
                    id: v1(), message: state.newMessageText
                }
                copyState.messages.push(newMessage);
            }
            return copyState;
        }

        case "UPDATE-NEW-MESSAGE-TEXT":{
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }

        default:
            return state
    }

}
export default dialogsReducer;