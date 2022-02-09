import {addPostActionAC, setUserProfileAC, updateNewPostTextAC} from "./ProfileReducer";
import {addMessageAC, updateNewMessageTextAC} from "./DialogsReducer";

export type ActionsTypes = ReturnType<typeof addPostActionAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof updateNewMessageTextAC>|
    ReturnType<typeof follow>|
    ReturnType<typeof unFollow>|
    ReturnType<typeof setUsers>|
    ReturnType<typeof setCurrentPage>|
    ReturnType<typeof setUsersTotalCount>|
    ReturnType<typeof toggleIsFetching>|
    ReturnType<typeof setUserProfileAC>

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

export const follow = (userID: string) => {
    return {
        type: "FOLLOW",
        userID: userID,
    } as const
}
export const unFollow = (userID: string) => {
    return {
        type: "UNFOLLOW",
        userID: userID,
    } as const
}
export const setUsers = (users: UserType[]) =>{
    return {
        type: "SET-USERS",
        users: users,
    } as const
}
export const setCurrentPage = (currentPage:number) =>{
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: currentPage,
    } as const
}
export const setUsersTotalCount = (serverTotalUsersCount:number) =>{
    return{
        type:"SET-TOTAL-USERS-COUNT",
        totalUserCount: serverTotalUsersCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) =>{
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
