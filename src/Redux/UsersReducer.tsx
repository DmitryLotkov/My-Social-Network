import {authAPI, userAPI} from "../components/api";
import {Dispatch} from "redux";
import {ActionsTypes} from "./ActionsTypes";

//types
export type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: string,
    name: string
    status: string
    followed: boolean
    photos: PhotosType

}
export type UsersType = {
    items: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    following: Array<string>
}


let initialState: UsersType = {
    items: [],
    pageSize: 7,
    totalCount: 1,
    currentPage: 1,
    isFetching: true,
    following: [],
}
export const userReducer = (state = initialState, action: ActionsTypes): UsersType => {
    switch (action.type) {
        case "FOLLOW":

            return {...state, items: state.items.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, items: state.items.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case "SET-USERS":
            return {...state, items: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalCount: action.totalCount}
        case "IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                following: action.followingIsProgress
                    ? [...state.following, action.userID]
                    : state.following.filter(id => id !== action.userID)
            }
        default:
            return state;
    }
}

//action creators
export const followSuccess = (userID: string) => ({type: "FOLLOW", userID: userID,} as const)
export const unFollowSuccess = (userID: string) => ({type: "UNFOLLOW", userID: userID,} as const)
export const setUsersAC = (users: UserType[]) => ({type: "SET-USERS", users: users} as const)
export const setCurrentPageAC = (currentPage: number) => ({
    type: "SET-CURRENT-PAGE",
    currentPage: currentPage,
} as const)
export const setUsersTotalCountAC = (serverTotalUsersCount: number) => ({
    type: "SET-TOTAL-USERS-COUNT",
    totalCount: serverTotalUsersCount
} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: "IS-FETCHING", isFetching: isFetching,} as const)
export const toggleFollowingProgressAC = (followingIsProgress: boolean, userID: string) => ({
    type: "IS-FOLLOWING-PROGRESS",
    followingIsProgress: followingIsProgress,
    userID: userID,
} as const)

//thunks
export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    let response = await userAPI.getUsers(currentPage, pageSize)
    try {
        dispatch(toggleIsFetchingAC(false));
        dispatch(setUsersAC(response.data.items));
        dispatch(setUsersTotalCountAC(response.data.totalCount));
    } catch (error: any) {
        console.log(error.message)
    }
}

export const onPageChangedTC = (pageSize: number, pageNumber: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    dispatch(setCurrentPageAC(pageNumber));
    let response = await userAPI.getUsers(pageNumber, pageSize)
    try {
        dispatch(setUsersAC(response.data.items));
        dispatch(setUsersTotalCountAC(response.data.totalCount));
        dispatch(toggleIsFetchingAC(false));
    } catch (error: any) {
        console.log(error.message)
    }

}


export const follow = (userID: string) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgressAC(true, userID));

    let response = await authAPI.follow(userID)
    try {
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userID));
        }
        dispatch(toggleFollowingProgressAC(false, userID));
    } catch (error: any) {
        console.log(error.message)
    }

}


export const unfollow = (userID: string) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgressAC(true, userID));
    let response = await authAPI.unfollow(userID);
    try {
        if (response.data.resultCode === 0) {
            dispatch(unFollowSuccess(userID));
        }
        dispatch(toggleFollowingProgressAC(false, userID));
    } catch (error: any) {
        console.log(error.message)
    }
}

