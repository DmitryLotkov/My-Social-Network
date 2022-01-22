
import {ActionsTypes} from "./store";

export type LocationType = {
    city: string
    country: string
}
export type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: string,
    name: string
    status: string
    location:LocationType
    followed: boolean
    photos: PhotosType
}
export type UsersType = {
    users: UserType[]
}
export const followAC = (userID: string) => {
    return {
        type: "FOLLOW",
        userID: userID,
    } as const
}
export const unFollowAC = (userID: string) => {
    return {
        type: "UNFOLLOW",
        userID: userID,
    } as const
}
export const setUsersAC = (users: UserType[]) =>{
    return {
        type: "SET-USERS",
        users: users,
    } as const
}
let initialState: UsersType = {
    users: []
}
export const userReducer = (state = initialState, action: ActionsTypes):UsersType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true}:u)}
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false}:u)}
        }
        case "SET-USERS":{
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}
