import axios, {AxiosResponse} from "axios";
import {UsersPageType} from "../Redux/UsersReducer";
import {ProfileDataType} from "../Redux/ProfileReducer";
import {LoginParamsType} from "../Redux/AuthReducer";


export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "c3728aab-6f62-411f-9e90-c03d8ff7b899",
    }
})
export type AuthDataType = {
    id:number,
    email: string
    login:string
}
export type RespType<T = {}> = {
    resultCode: 0
    data: T
    fieldsErrors: Array<string>
    messages: Array<string>
}

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersPageType>(`users?page=${currentPage}&count=${pageSize}`);
    },
}

export const profileAPI = {
    getProfile(userID: number | null) {
        return instance.get<ProfileDataType>(`profile/${userID}`);
    },
    getStatus(userID: number | null) {
        return instance.get<AxiosResponse<RespType>, any>(`profile/status/${userID}`);
    },
    updateStatus(status: string | null) {

        return instance.put<AxiosResponse<RespType>,any>(`profile/status`, {status})
    },
    uploadAvatar(photoFile:File){
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put<RespType<{photos:{small:"", large:""}}>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile(profile: ProfileDataType){
        return instance.put<AxiosResponse<RespType>,any>(`profile`, {...profile})
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
    },
    getFollowers(userID: string | undefined){
        return instance.get(`follow/${userID}`)
    }

}
export const securityAPI = {
    captcha(){
        return instance.get<{url:string| null}>(`/security/get-captcha-url`)
    }
}
