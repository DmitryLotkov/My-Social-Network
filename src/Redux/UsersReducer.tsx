import {addPostActionAC, setUserProfileAC, updateNewPostTextAC} from "./ProfileReducer";
import {addMessageAC, updateNewMessageTextAC} from "./DialogsReducer";
import { setUserAC} from "./authReducer";

export type ActionsTypes = ReturnType<typeof addPostActionAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof updateNewMessageTextAC>|
    ReturnType<typeof followAC>|
    ReturnType<typeof unFollowAC>|
    ReturnType<typeof setUsersAC>|
    ReturnType<typeof setCurrentPageAC>|
    ReturnType<typeof setUsersTotalCountAC>|
    ReturnType<typeof toggleIsFetchingAC>|
    ReturnType<typeof setUserProfileAC>|
    ReturnType<typeof setUserAC>

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
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
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
export const setCurrentPageAC = (currentPage:number) =>{
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: currentPage,
    } as const
}
export const setUsersTotalCountAC = (serverTotalUsersCount:number) =>{
    return{
        type:"SET-TOTAL-USERS-COUNT",
        totalUserCount: serverTotalUsersCount
    } as const
}
export const toggleIsFetchingAC = (isFetching: boolean) =>{
    return{
        type: "IS-FETCHING",
        isFetching: isFetching,
    } as const
}

let initialState: UsersType = {
    users: [],
    pageSize: 7,
    totalUserCount: 1,
    currentPage: 1,
    isFetching: true,
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
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE":{
            return {...state,currentPage:action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT":{
            return {...state, totalUserCount: action.totalUserCount}
        }
        case "IS-FETCHING":{
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}
