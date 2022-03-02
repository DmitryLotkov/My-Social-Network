import {Dispatch} from "redux";
import {userAPI} from "../components/api";
import {setUserProfileAC} from "./ProfileReducer";

export enum ACTIONS_TYPE {
    SET_USER_DATA = "SET_USER_DATA",
}

type AuthReducerType =
    ReturnType<typeof setUserAC>

export type DataType = {
    id: null | number
    email: null | string
    login: null | string
}
export type AuthType = {
    data: DataType
    resultCode: number
    messages: Array<any>
    isAuth: boolean
}
const initialState: AuthType = {
    data: {
        id: 0,
        email: "",
        login: "",
    },
    resultCode: 0,
    messages: [],
    isAuth: false
}
export const authThunkCreator = () => {
    return (dispatch: Dispatch) => {
        userAPI.getAuth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserAC(response.data.data));
                    return response.data.data.id;
                }
            })
            .then((value: DataType) => userAPI.getUserID(value))
            .then(response => {
                return (
                    dispatch(setUserProfileAC(response.data))
                )
            })
    }
}

export const authReducer = (state = initialState, action: AuthReducerType): AuthType => {

    switch (action.type) {
        case ACTIONS_TYPE.SET_USER_DATA: {

            return {
                ...state,
                data: action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}
export const setUserAC = (data: DataType) => {
    return {
        type: ACTIONS_TYPE.SET_USER_DATA,
        data: data,
    }
}