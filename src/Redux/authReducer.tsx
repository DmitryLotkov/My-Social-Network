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

type InitialStateType =  {
    data: DataType
    isAuth: boolean
    isFetching: boolean
}

const initialState: InitialStateType = {
    data: {} as DataType,
    isAuth: false,
    isFetching: true
}
export const authThunkCreator = () => {
    return async (dispatch: Dispatch) => {

        userAPI.getAuth()
            .then((response) => {
                if (response.data.resultCode === 0) {

                    dispatch(setUserAC(response.data.data));
                    return response.data.data.id;
                }
            })
            .then((value) => {
                if(value) return userAPI.getUserID(value);
            })
            .then(response => {
                if(response) return (
                    dispatch(setUserProfileAC(response.data))
                )
            })

    }
}

export const authReducer = (state = initialState, action: AuthReducerType): InitialStateType => {

    switch (action.type) {
        case ACTIONS_TYPE.SET_USER_DATA: {

            return {
                ...state,
                data: action.data,
                isAuth: true,
                isFetching: false,
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
