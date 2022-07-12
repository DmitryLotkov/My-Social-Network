import {authAPI, userAPI} from "../components/api";
import {handleNetworkError, handleServerNetworkError} from "../utils/error.utils";
import {AppThunkDispatch} from "./store";
import {setAppErrorAC, setAppStatusAC} from "./AppReducer";

//types
export enum ACTIONS_TYPE {
    FOLLOW = "USERS/FOLLOW",
    UNFOLLOW = "USERS/UNFOLLOW",
    SET_USERS = "USERS/SET-USERS",
    SET_CURRENT_PAGE = "USERS/SET-CURRENT-PAGE",
    SET_TOTAL_USERS_COUNT = "USERS/SET-TOTAL-USERS-COUNT",
    IS_FETCHING = "USERS/IS-FETCHING",
    IS_FOLLOWING_PROGRESS = "USERS/IS-FOLLOWING-PROGRESS"
}

export type UsersActionsType =
    ReturnType<typeof followSuccessAC> |
    ReturnType<typeof unFollowSuccessAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setUsersTotalCountAC> |
    ReturnType<typeof toggleIsFetchingAC>|
    ReturnType < typeof toggleFollowingProgressAC>


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
export type UsersPageType = {
    items: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    following: Array<string>
}


const initialState: UsersPageType = {
    items: [],
    pageSize: 7,
    totalCount: 1,
    currentPage: 1,
    isFetching: true,
    following: [],
}
export const userReducer = (state: UsersPageType = initialState, action: UsersActionsType): UsersPageType => {
    switch (action.type) {
        case ACTIONS_TYPE.FOLLOW:
            return {...state, items: state.items.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case ACTIONS_TYPE.UNFOLLOW:
            return {...state, items: state.items.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case ACTIONS_TYPE.SET_USERS:
            return {...state, items: action.users}
        case ACTIONS_TYPE.SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case ACTIONS_TYPE.SET_TOTAL_USERS_COUNT:
            return {...state, totalCount: action.totalCount}
        case ACTIONS_TYPE.IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case ACTIONS_TYPE.IS_FOLLOWING_PROGRESS:
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
export const followSuccessAC = (userID: string) => ({type: ACTIONS_TYPE.FOLLOW, userID: userID} as const)
export const unFollowSuccessAC = (userID: string) => ({type: ACTIONS_TYPE.UNFOLLOW, userID: userID} as const)
export const setUsersAC = (users: UserType[]) => ({type: ACTIONS_TYPE.SET_USERS, users: users} as const)
export const setCurrentPageAC = (currentPage: number) => ({
    type: ACTIONS_TYPE.SET_CURRENT_PAGE,
    currentPage: currentPage,
} as const)
export const setUsersTotalCountAC = (serverTotalUsersCount: number) => ({
    type: ACTIONS_TYPE.SET_TOTAL_USERS_COUNT,
    totalCount: serverTotalUsersCount
} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({
    type: ACTIONS_TYPE.IS_FETCHING,
    isFetching: isFetching,
} as const)
export const toggleFollowingProgressAC = (followingIsProgress: boolean, userID: string) => ({
    type: ACTIONS_TYPE.IS_FOLLOWING_PROGRESS,
    followingIsProgress: followingIsProgress,
    userID: userID,
} as const)

//thunks
export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: AppThunkDispatch) => {
    dispatch(toggleIsFetchingAC(true));
    let res = await userAPI.getUsers(currentPage, pageSize)
    try {
        dispatch(toggleIsFetchingAC(false));
        dispatch(setUsersAC(res.data.items));
        dispatch(setUsersTotalCountAC(res.data.totalCount));
    } catch (error: any) {
        console.log("Error when you try get users", error)
        handleServerNetworkError(error, dispatch)
    }
}

export const onPageChangedTC = (pageSize: number, pageNumber: number) => async (dispatch: AppThunkDispatch) => {
    dispatch(toggleIsFetchingAC(true));
    dispatch(setCurrentPageAC(pageNumber));
    let res = await userAPI.getUsers(pageNumber, pageSize)
    try {
        dispatch(setUsersAC(res.data.items));
        dispatch(setUsersTotalCountAC(res.data.totalCount));
        dispatch(toggleIsFetchingAC(false));
    } catch (error: any) {
        console.log("Error when you try change page", error)
        handleServerNetworkError(error, dispatch)
    }

}


export const follow = (userID: string) => async (dispatch: AppThunkDispatch) => {
    dispatch(toggleFollowingProgressAC(true, userID));

    let response = await authAPI.follow(userID)
    try {
        if (response.data.resultCode === 0) {
            dispatch(followSuccessAC(userID));
        } else{
            dispatch(setAppErrorAC("Some error occupied"));
            dispatch(setAppStatusAC("failed"));
        }
        dispatch(toggleFollowingProgressAC(false, userID));
    } catch (error: any) {
        console.log("Error when you try follow user", error)
        handleServerNetworkError(error, dispatch)
    }

}


export const unfollow = (userID: string) => async (dispatch: AppThunkDispatch) => {
    dispatch(toggleFollowingProgressAC(true, userID));
    let response = await authAPI.unfollow(userID);
    try {
        if (response.data.resultCode === 0) {
            dispatch(unFollowSuccessAC(userID));
        }
        dispatch(toggleFollowingProgressAC(false, userID));
    } catch (error: any) {
        handleNetworkError(error, dispatch);
    }
}

