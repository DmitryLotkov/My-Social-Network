import {AppThunkDispatch} from "./store";
import {chatAPI, ChatMessageAPIType} from "../api/chatAPI";
import {Dispatch} from "redux";
import {v1} from "uuid";


//types
export enum ACTIONS_TYPE {
    SET_MESSAGES = "CHAT/SET-MESSAGES",
    CHANGE_STATUS = "CHAT/CHANGE-STATUS",

}
export type StatusType = "pending" | "ready" | "error";
export type ChatActionsType =
    ReturnType<typeof setMessagesAC> |
    ReturnType<typeof changeStatusAC>

export type ChatMessageType = ChatMessageAPIType & {id: string}

type InitialStateType = {
    messages: ChatMessageType[];
    oldMessages: ChatMessageType[];
    status: StatusType;

}

const initialState: InitialStateType = {
    messages: [] as Array<ChatMessageType>,
    status: "pending",
    oldMessages: [] as Array<ChatMessageType>,
}

//reducer
export const chatReducer = (state: InitialStateType = initialState, action: ChatActionsType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_MESSAGES:
            return {
                ...state, messages: [...state.messages, ...action.messages.map( m => ({...m, id: v1()}) )
                ]
                   /* .filter((m, index, arr) => index >= arr.length - 100)*/
            }
        case ACTIONS_TYPE.CHANGE_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
}
//action creators

export const setMessagesAC = (messages: ChatMessageAPIType[]) => ({type: ACTIONS_TYPE.SET_MESSAGES, messages}) as const;
export const changeStatusAC = (status: StatusType) => ({type: ACTIONS_TYPE.CHANGE_STATUS, status}) as const;




//thunks

let _newMessageHandler: ((messages:ChatMessageAPIType[]) => void) | null = null;

const newMessageHandlerCreator = (dispatch:Dispatch) =>{
    if(_newMessageHandler === null){ // это мемоизация
        _newMessageHandler = (messages) => {
            dispatch(setMessagesAC(messages))
        }

    }
    return _newMessageHandler

}

let _statusChangedHandler: ((status:StatusType) => void) | null = null;

const statusChangedHandlerCreator = (dispatch:Dispatch) =>{
    if(_statusChangedHandler === null){ // это мемоизация
        _statusChangedHandler = (status) => dispatch(changeStatusAC(status))
    }
    return _statusChangedHandler

}
export const startMessagesListeningTC = () => async (dispatch: AppThunkDispatch) => {

    try{
        chatAPI.start();
        chatAPI.subscribe("messageReceived", newMessageHandlerCreator(dispatch));
        chatAPI.subscribe("statusChanged", statusChangedHandlerCreator(dispatch));
    }
    catch (e){
        console.log(e)
    }

}
export const stopMessagesListeningTC = () => async (dispatch: AppThunkDispatch) => {
    try{
        chatAPI.unSubscribe("messageReceived", newMessageHandlerCreator(dispatch));
        chatAPI.unSubscribe("statusChanged", statusChangedHandlerCreator(dispatch));
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




