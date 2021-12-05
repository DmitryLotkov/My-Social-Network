import {ActionsTypes, DialogPageType, MessagesType} from "./store";
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

let initialState: DialogPageType = {
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

const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-DIALOG-MESSAGE":
            if (state.newMessageText) {
                const newMessage: MessagesType = {
                    id: v1(), message: state.newMessageText
                }
                state.messages.push(newMessage);
            }
            return state;
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newText;
            return state;
        default:
            return state
    }

}
export default dialogsReducer;