import {Dispatch} from "redux";
import {authAPI, AuthDataType} from "../components/api";
import {setAppErrorAC} from "./AppReducer";


export const myUserID = 21748;

//types
export enum ACTIONS_TYPE {
    AUTH_SET_IS_LOGGED_IN = "SET-IS-LOGGED-IN",
    AUTH_SET_IS_INITIALIZED = "SET-IS-INITIALIZED",
    AUTH_SET_PROFILE_DATA = "SET-PROFILE-DATA",
}


/*type ThunkType = ThunkAction<void, AppRootStateType, unknown, AuthActionsType>*/

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
    isLoggedIn: boolean
}

const initialState: InitialStateType = {
    data: {
        id: 0,
        email: "",
        login: ""
    },
    isInitialized: false,
    isLoggedIn: false

}
//thunks
export const initializeAppTC = () => {

    return (dispatch: Dispatch) => {
        authAPI.me()
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(setIsLoggedInAC(true));
                    dispatch(setAuthProfileAC(res.data.data));

                }
            })
            .catch((error: Error) => {
                console.log(error.message)
            })
            .finally(() => {
                dispatch(setInitializedAC(true));
            })
    }
}

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch) => {

    authAPI.login(data)
        .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setIsLoggedInAC(true));
                } else {
                    dispatch(setAppErrorAC(res.data.messages[0]))
                }
            }
        )
        .catch((error: Error) => {
            console.log(error.message)
        })
}
export const logOutTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setIsLoggedInAC(false));
                }
            })
            .catch((error: Error) => {
                console.log(error.message);
            })

    }
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



