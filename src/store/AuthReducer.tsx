import {authAPI, AuthDataType, securityAPI} from "../components/api";
import {AppThunkDispatch} from "./store";
import {myUserID} from "../constants";
import {handleNetworkError, handleServerAppError, handleServerNetworkError} from "../utils/error.utils";
import {setAppStatusAC} from "./AppReducer";
import {getProfileTC, ProfileDataType} from "./ProfileReducer";


//types
export enum ACTIONS_TYPE {
    SET_IS_LOGGED_IN = "AUTH/SET-IS-LOGGED-IN",
    SET_IS_INITIALIZED = "AUTH/SET-IS-INITIALIZED",
    SET_AUTH_DATA = "AUTH/SET-AUTH-DATA",
    GET_CAPTCHA = "AUTH/GET-CAPTCHA",
    SET_AUTH_PROFILE_DATA = "AUTH/SET-AUTH-PROFILE-DATA",
}

export type AuthActionsType =
    ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setInitializedAC>
    | ReturnType<typeof setAuthProfileAC>
    | ReturnType<typeof getCaptchaAC>
    | ReturnType<typeof setMyProfileAC>

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

type InitialStateType = {
    data: AuthDataType,
    isInitialized: boolean
    isLoggedIn: boolean,
    captchaUrl: null | string
    myProfile: undefined | ProfileDataType
}

const initialState: InitialStateType = {
    data: {
        id: myUserID,
        email: "",
        login: "",

    },
    isInitialized: false,
    isLoggedIn: false,
    captchaUrl: null,
    myProfile: undefined as undefined | ProfileDataType
}

//reducer
export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.isLoggedIn}
        case ACTIONS_TYPE.SET_IS_INITIALIZED:
            return {...state, isInitialized: action.isInitialized}
        case ACTIONS_TYPE.SET_AUTH_DATA:
            return {...state, data: action.data}
        case ACTIONS_TYPE.GET_CAPTCHA:
            return {...state, captchaUrl: action.captcha}
        case ACTIONS_TYPE.SET_AUTH_PROFILE_DATA:
            return {...state, myProfile: action.profile}
        default:
            return state
    }
}
//action creators
export const setIsLoggedInAC = (isLoggedIn: boolean) =>
    ({type: ACTIONS_TYPE.SET_IS_LOGGED_IN, isLoggedIn} as const);
export const setInitializedAC = (isInitialized: boolean) =>
    ({type: ACTIONS_TYPE.SET_IS_INITIALIZED, isInitialized} as const);
export const setAuthProfileAC = (profileData: AuthDataType) =>
    ({type: ACTIONS_TYPE.SET_AUTH_DATA, data: profileData} as const);
export const getCaptchaAC = (captcha: string | null) =>
    ({type: ACTIONS_TYPE.GET_CAPTCHA, captcha} as const);
export const setMyProfileAC = (profile: ProfileDataType) => ({
    type: ACTIONS_TYPE.SET_AUTH_PROFILE_DATA, profile
} as const)


//thunks
export const initializeAppTC = () => async (dispatch: AppThunkDispatch) => {
    try {
        let res = await authAPI.me();
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC(true));
            dispatch(setAuthProfileAC(res.data.data));
            await dispatch(getProfileTC(res.data.data.id, true));
        } else {
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
    try {
        let res = await authAPI.login(data);
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC(true));
            dispatch(getCaptchaAC(null))
            dispatch(await initializeAppTC())
        } else {
            if (res.data.resultCode === 10) {
                dispatch(await getCaptchaTC())
            }
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
        } else {
            handleServerAppError(res.data, dispatch);
        }
    } catch (error: any) {
        console.log("Error when you try to logout", error)
        handleServerNetworkError(error, dispatch)
    }
}

export const getCaptchaTC = () => async (dispatch: AppThunkDispatch) => {
    let res = await securityAPI.captcha();
    try {

        dispatch(getCaptchaAC(res.data.url))
    } catch (error: any) {
        console.log("Error when you try to logout", error)
        handleServerNetworkError(error, dispatch)
    }

}



