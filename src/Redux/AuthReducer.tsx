import {authAPI, AuthDataType} from "../components/api";
import {AppThunkDispatch} from "./store";
import {myUserID} from "../constants";
import {handleNetworkError, handleServerAppError, handleServerNetworkError} from "../utils/error.utils";
import {setAppStatusAC} from "./AppReducer";


//types
export enum ACTIONS_TYPE {
    AUTH_SET_IS_LOGGED_IN = "SET-IS-LOGGED-IN",
    AUTH_SET_IS_INITIALIZED = "SET-IS-INITIALIZED",
    AUTH_SET_PROFILE_DATA = "SET-PROFILE-DATA",
}

export type AuthActionsType =
    ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setInitializedAC>
    | ReturnType<typeof setAuthProfileAC>

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

type InitialStateType = {
    data: AuthDataType,
    isInitialized: boolean
    isLoggedIn: boolean,

}

const initialState: InitialStateType = {
    data: {
        id: myUserID,
        email: "",
        login: ""
    },
    isInitialized: false,
    isLoggedIn: false,

}

//reducer
export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {

        case ACTIONS_TYPE.AUTH_SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.isLoggedIn}
        case ACTIONS_TYPE.AUTH_SET_IS_INITIALIZED:
            return {...state, isInitialized: action.isInitialized}
        case ACTIONS_TYPE.AUTH_SET_PROFILE_DATA:
            return {...state, data: action.data}

        default:
            return state
    }
}
//action creators
export const setIsLoggedInAC = (isLoggedIn: boolean) =>
    ({type: ACTIONS_TYPE.AUTH_SET_IS_LOGGED_IN, isLoggedIn} as const);

export const setInitializedAC = (isInitialized: boolean) =>
    ({type: ACTIONS_TYPE.AUTH_SET_IS_INITIALIZED, isInitialized} as const);

export const setAuthProfileAC = (profileData: AuthDataType) =>
    ({type: ACTIONS_TYPE.AUTH_SET_PROFILE_DATA, data: profileData} as const);

//thunks
export const initializeAppTC = () => async (dispatch: AppThunkDispatch) => {

    let res = await authAPI.me();
    try {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC(true));
            dispatch(setAuthProfileAC(res.data.data));
        }
        else {
            dispatch(setAppStatusAC("failed"));
        }
    } catch (error: any) {
        console.log("Error when you try initialize app", error)
        handleNetworkError(error, dispatch);
    } finally {
        dispatch(setInitializedAC(true));
    }


}


export const loginTC = (data: LoginParamsType) => async (dispatch: AppThunkDispatch) => {

    let res = await authAPI.login(data);
    try {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC(true));
        } else {
            handleServerAppError(res.data, dispatch);
        }
    } catch (error: any) {
        console.log("Error when you try to login", error)
        handleServerNetworkError(error, dispatch)
    }


}
export const logOutTC = () => async (dispatch: AppThunkDispatch) => {
    let res = await authAPI.logout();
    try {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC(false));
        }
        else {
            handleServerAppError(res.data, dispatch);
        }
    } catch (error: any) {
        console.log("Error when you try to logout", error)
        handleServerNetworkError(error, dispatch)
    }
}




