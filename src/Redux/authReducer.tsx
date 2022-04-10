import {Dispatch} from "redux";
import {authAPI, profileAPI} from "../components/api";
import {setMyProfilePhotoAC, setUserProfileAC} from "./ProfileReducer";

export enum ACTIONS_TYPE {
    SET_USER_DATA = "SET_USER_DATA",
}

type AuthReducerType =
    ReturnType<typeof setUserAC>

export type AuthDataType = {
    id: null | number
    email: null | string
    login: null | string
}

type InitialStateType = {
    data: AuthDataType
    isAuth: boolean
    isFetching: boolean
    resultCode: number
}

const initialState: InitialStateType = {
    data: {} as AuthDataType,
    isAuth: false,
    isFetching: true,
    resultCode: 0,

}
export const authThunkCreator = () => {
    return async (dispatch: Dispatch) => {

        authAPI.getAuth()
            .then((response) => {

                if (response.data.resultCode === 0) {
                    dispatch(setUserAC(response.data.data));
                    return response.data.data.id; //тут мы достаем свой ID из объекта при аутенфикации в соц. сети
                }
            })
            .then(value => {

                if (value) return profileAPI.getProfile(value); //тут мы отправляем этот ID в профайл, чтобы создать новый промис с типом userType
            })                                                        //далее мы отправляем мой айди в setUserProfileAC, чтобы создать страницу своего профайла
            .then(response => {                                       //а потом сохраняем данные с сервера с моим фотом из профайла в стейте
                if (response) {

                    dispatch(setUserProfileAC(response.data));
                    dispatch(setMyProfilePhotoAC(response.data.photos.small));
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
                isAuth: true,
                isFetching: false,
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
    }
}
