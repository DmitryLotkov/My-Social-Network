import axios from "axios";
import {DataType} from "../Redux/authReducer";


export const instance = axios.create({
    withCredentials: true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY": "3ca3376c-f1c7-42b6-b439-a7f59c674e78",
    }
})

export const userAPI = {

    getUsers(currentPage:number, pageSize:number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    getProfile (userID:string | undefined) {
        return instance.get(`profile/ ${userID}`)
    },
    getAuth() {
        return instance.get(`auth/me`)
    },
    getUserID(value:DataType){
        return instance.get(`profile/${value}`)
    },
    postFollowUser(userID:string | undefined){
        return instance.post(`follow/${userID}`)
    },
    deleteUnFollowUser(userID:string | undefined){
        return instance.delete(`follow/${userID}`)
    }
}