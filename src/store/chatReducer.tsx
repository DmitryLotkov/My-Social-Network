import {AppThunkDispatch} from "./store";
import {chatAPI, ChatMessageType} from "../api/chatAPI";
import {Dispatch} from "redux";


//types
export enum ACTIONS_TYPE {
    SET_MESSAGES = "CHAT/SET-MESSAGES",
}

export type ChatActionsType =
    ReturnType<typeof setMessagesAC>


type InitialStateType = {
    messages: ChatMessageType[];

}

const initialState: InitialStateType = {
    messages: [] as Array<ChatMessageType>,
}

//reducer
export const chatReducer = (state: InitialStateType = initialState, action: ChatActionsType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, ...action.messages]
            }
        default:
            return state
    }
}
//action creators

export const setMessagesAC = (messages: ChatMessageType[]) =>{

    return {type: ACTIONS_TYPE.SET_MESSAGES, messages} as const;
}



//thunks

let _newMessageHandler: ((messages:ChatMessageType[]) => void) | null = null;

const newMessageHandlerCreator = (dispatch:Dispatch) =>{
    if(_newMessageHandler === null){ // это мемоизация
        _newMessageHandler = (messages) => dispatch(setMessagesAC(messages))
    }
    return _newMessageHandler

}
export const startMessagesListeningTC = () => async (dispatch: AppThunkDispatch) => {

    try{
        chatAPI.start();
        chatAPI.subscribe(newMessageHandlerCreator(dispatch));
    }
    catch (e){
        console.log(e)
    }

}
export const stopMessagesListeningTC = () => async (dispatch: AppThunkDispatch) => {
    try{
        chatAPI.unSubscribe(newMessageHandlerCreator(dispatch));
        chatAPI.stop();
    }
    catch (e){
        console.log(e)
    }
}
export const sendMessageTC = (message:string) => async () => {
    try{
        chatAPI.sendMessage(message)
    }
    catch (e){
        console.log(e)
    }

}




