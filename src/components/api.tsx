import axios, {AxiosResponse} from "axios";
import {UsersType} from "../Redux/UsersReducer";
import {ProfileDataType} from "../Redux/ProfileReducer";
import {LoginParamsType} from "../Redux/AuthReducer";


export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "3ca3376c-f1c7-42b6-b439-a7f59c674e78",
    }
})
export type AuthDataType = {
    id:number,
    email: string
    login:string
}
type RespType<T = {}> = {
    resultCode: 0
    data: T
    fieldsErrors: Array<string>
    messages: Array<string>
}
export const userAPI = {

    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersType>(`users?page=${currentPage}&count=${pageSize}`);
    },
}

export const profileAPI = {
    getProfile(userID: number | null) {
        return instance.get<ProfileDataType>(`profile/${userID}`);
    },
    getStatus(userID: number | null) {

        return instance.get<AxiosResponse<string>, any>(`profile/status/${userID}`);
    },
    updateStatus(status: string | null) {
        return instance.put<AxiosResponse<RespType>,any>(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get<RespType<AuthDataType>>(`auth/me`);
    },
    follow(userID: string | undefined) {
        return instance.post<RespType<AuthDataType>>(`follow/${userID}`);
    },
    unfollow(userID: string | undefined) {
        return instance.delete<RespType<AuthDataType>>(`follow/${userID}`);
    },
    login(data: LoginParamsType){
        return instance.post<RespType<AuthDataType>>(`auth/login`, data);
    },
    logout(){
        return instance.delete<RespType>('/auth/login');
    }

}
