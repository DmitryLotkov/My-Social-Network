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
        type: "SET_CURRENT_PAGE",
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
    pageSize: 22,
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
        case "SET_CURRENT_PAGE":{
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
