import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../components/api";
import {ActionsTypes} from "./ActionsTypes";
import {setIsAuthInAC} from "./AuthReducer";

type InitialStateType =  {
    data: LoginParamsType

}

export enum ACTIONS_TYPES {
    LOGIN_USER = "LOGIN-USER",
}

const initialState:InitialStateType  = {
    data: {
        email: "",
        password: "",
        rememberMe: false,
        captcha: "",
    },
}

export const loginReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPES.LOGIN_USER:
            return {...state,
                data: action.data
            }

        default:
            return state
    }


}

export const loginAC = (data: LoginParamsType) => {
    return {
        type: ACTIONS_TYPES.LOGIN_USER,
        data,
    } as const
}


export const loginTC = (data: LoginParamsType) => {
    return (dispatch: Dispatch) => {
        authAPI.login(data).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(loginAC(data));
                dispatch(setIsAuthInAC("logged"))
            }
        })
    }
}