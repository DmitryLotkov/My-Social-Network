import {ActionsTypes, DialogPageType, MessagesType} from "./state";
import {v1} from "uuid";

export const addMessageAC = (messageText: string) => {
    return {
        type: "ADD-DIALOG-MESSAGE",
        newMessage: messageText
    } as const
}
export const updateNewMessageTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newText: text
    } as const
}
const dialogsReducer = (state: DialogPageType, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-DIALOG-MESSAGE":
            if (action.newMessage) {
                const newMessage: MessagesType = {
                    id: v1(), message: action.newMessage
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