import {authAPI, userAPI} from "../components/api";
import {Dispatch} from "redux";
import {ActionsTypes} from "./ActionsTypes";


export const getUsersTC = (currentPage: number, pageSize: number) => {

    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetchingAC(true));
        userAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(toggleIsFetchingAC(false));
                dispatch(setUsersAC(response.data.items));
                dispatch(setUsersTotalCountAC(response.data.totalCount));
            });
    }
}
export const onPageChangedCTC = (pageSize: number, pageNumber: number) => {

    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetchingAC(true));
        dispatch(setCurrentPageAC(pageNumber));
        userAPI.getUsers(pageNumber, pageSize)
            .then(response => {
                    dispatch(setUsersAC(response.data.items));
                    dispatch(setUsersTotalCountAC(response.data.totalCount));
                    dispatch(toggleIsFetchingAC(false));
                }
            )
    }

}

export const follow = (userID: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgressAC(true, userID));
        authAPI.follow(userID)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userID));
                }
                dispatch(toggleFollowingProgressAC(false, userID));
            })
    }
}

export const unfollow = (userID: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgressAC(true, userID));
        authAPI.unfollow(userID)
            .then(response => {
                if (response.data.resultCode === 0) {

                    dispatch(unFollowSuccess(userID));
                }
                dispatch(toggleFollowingProgressAC(false, userID));
            })
    }
}
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
    location: LocationType
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

export const followSuccess = (userID: string) => {
    return {
        type: "FOLLOW",
        userID: userID,
    } as const
}
export const unFollowSuccess = (userID: string) => {
    return {
        type: "UNFOLLOW",
        userID: userID,
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        users: users,
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: currentPage,
    } as const
}
export const setUsersTotalCountAC = (serverTotalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalCount: serverTotalUsersCount
    } as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: "IS-FETCHING",
        isFetching: isFetching,
    } as const
}

export const toggleFollowingProgressAC = (followingIsProgress: boolean, userID: string) => {
    return {
        type: "IS-FOLLOWING-PROGRESS",
        followingIsProgress: followingIsProgress,
        userID: userID,
    } as const
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
        case "FOLLOW": {
            return {...state, items: state.items.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        }

        case "UNFOLLOW": {
            return {...state, items: state.items.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        }

        case "SET-USERS": {
            return {...state, items: action.users}
        }

        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }

        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalCount: action.totalCount}
        }

        case "IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }

        case "IS-FOLLOWING-PROGRESS": {
            return {
                ...state,
                following: action.followingIsProgress
                    ? [...state.following, action.userID]
                    : state.following.filter(id => id !== action.userID)
            }
        }

        default:
            return state;
    }
}
