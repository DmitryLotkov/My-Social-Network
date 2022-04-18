import {Dispatch} from "redux";
import {authAPI} from "../components/api";

export const myUserID = 21748;
//types
export enum ACTIONS_TYPE {
    SET_USER_DATA = "SET-USER_DATA",
    SET_AUTH = "SET-AUTH",
}
export type checkAuthType = "idle" | "logged" | "unLogged"
type AuthReducerType = ReturnType<typeof setUserAC>| ReturnType<typeof setIsAuthInAC>
export type AuthDataType = {
    id: null | number
    email: null | string
    login: null | string
}

type InitialStateType = {
    data: AuthDataType
    isAuth: checkAuthType
    isFetching: boolean
}

const initialState: InitialStateType = {
    data: {} as AuthDataType,
    isAuth: "idle",
    isFetching: true,

}
//thunks
export const authTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.getAuth()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserAC(response.data.data));
                    dispatch(setIsAuthInAC("logged"))
                    return response.data.data.id; //тут мы достаем свой ID из объекта при аутенфикации в соц. сети
                }
            })
            .catch((err) =>{
                dispatch(setIsAuthInAC("unLogged"))
                console.log(err)
            })

    }
}

export const logOutTC = () =>{
    return (dispatch: Dispatch) =>{
        authAPI.logout().then( res =>{
            if(res.data.resultCode === 0){
                dispatch( dispatch(setIsAuthInAC("unLogged")))
            }
        })

    }
}
export const authReducer = (state = initialState, action: AuthReducerType): InitialStateType => {

    switch (action.type) {
        case ACTIONS_TYPE.SET_USER_DATA: {

            return {
                ...state,
                data: action.data,
                isAuth: "logged",
                isFetching: false,
            }
        }
        case ACTIONS_TYPE.SET_AUTH:{
            return {
                ...state, isAuth:action.isAuth
            }
        }

        default:
            return state;
    }
}
export const setUserAC = (data: AuthDataType) => {

    return {
        type: ACTIONS_TYPE.SET_USER_DATA,
        data: data,
    } as const
}
export const setIsAuthInAC = (isAuth: checkAuthType) =>{
    return {
        type: ACTIONS_TYPE.SET_AUTH,
        isAuth
    } as const
}


