import { authAPI, userAPI } from '../api/api';
import { handleNetworkError, handleServerNetworkError } from '../utils/error.utils';

import { setAppErrorAC, setAppStatusAC } from './AppReducer';
import { AppStoreType, AppThunkDispatch, InferActionsTypes } from './store';

// types

export type UsersActionsType = InferActionsTypes<typeof actions>;

export type PhotosType = {
  small: string;
  large: string;
};
export type UserType = {
  id: string;
  name: string;
  status: string;
  followed: boolean;
  photos: PhotosType;
};
export type UsersPageType = {
  items: UserType[];
  pageSize: number;
  totalCount: number;
  currentPage: number;
  isFetching: boolean;
  following: Array<string>;
};

const initialState: UsersPageType = {
  items: [],
  pageSize: 7,
  totalCount: 1,
  currentPage: 1,
  isFetching: true,
  following: [],
};
export const userReducer = (
  state: UsersPageType = initialState,
  action: UsersActionsType,
): UsersPageType => {
  switch (action.type) {
    case 'USERS/FOLLOW':
      return {
        ...state,
        items: state.items.map(u =>
          u.id === action.userID ? { ...u, followed: true } : u,
        ),
      };
    case 'USERS/UNFOLLOW':
      return {
        ...state,
        items: state.items.map(u =>
          u.id === action.userID ? { ...u, followed: false } : u,
        ),
      };
    case 'USERS/SET-USERS':
      return { ...state, items: action.users };
    case 'USERS/SET-CURRENT-PAGE':
      return { ...state, currentPage: action.currentPage };
    case 'USERS/SET-TOTAL-USERS-COUNT':
      return { ...state, totalCount: action.totalCount };
    case 'USERS/IS-FETCHING':
      return { ...state, isFetching: action.isFetching };
    case 'USERS/IS-FOLLOWING-PROGRESS':
      return {
        ...state,
        following: action.followingIsProgress
          ? [...state.following, action.userID]
          : state.following.filter(id => id !== action.userID),
      };
    default:
      return state;
  }
};

// action creators
export const actions = {
  followSuccessAC: (userID: string) => ({ type: 'USERS/FOLLOW', userID } as const),
  unFollowSuccessAC: (userID: string) => ({ type: 'USERS/UNFOLLOW', userID } as const),
  setUsersAC: (users: UserType[]) => ({ type: 'USERS/SET-USERS', users } as const),
  setCurrentPageAC: (currentPage: number) =>
    ({ type: 'USERS/SET-CURRENT-PAGE', currentPage } as const),
  setUsersTotalCountAC: (serverTotalUsersCount: number) =>
    ({
      type: 'USERS/SET-TOTAL-USERS-COUNT',
      totalCount: serverTotalUsersCount,
    } as const),
  toggleIsFetchingAC: (isFetching: boolean) =>
    ({
      type: 'USERS/IS-FETCHING',
      isFetching,
    } as const),
  toggleFollowingProgressAC: (followingIsProgress: boolean, userID: string) =>
    ({
      type: 'USERS/IS-FOLLOWING-PROGRESS',
      followingIsProgress,
      userID,
    } as const),
};

// thunks
export const getUsersTC =
  () => async (dispatch: AppThunkDispatch, getState: () => AppStoreType) => {
    const { currentPage, pageSize } = getState().UsersPage;
    dispatch(actions.toggleIsFetchingAC(true));
    const res = await userAPI.getUsers(currentPage, pageSize);
    try {
      dispatch(actions.toggleIsFetchingAC(false));
      dispatch(actions.setUsersAC(res.data.items));
      dispatch(actions.setUsersTotalCountAC(res.data.totalCount));
    } catch (error: any) {
      console.log('Error when you try get users', error);
      handleServerNetworkError(error, dispatch);
    }
  };

export const onPageChangedTC =
  (pageSize: number, pageNumber: number) => async (dispatch: AppThunkDispatch) => {
    dispatch(actions.toggleIsFetchingAC(true));
    dispatch(actions.setCurrentPageAC(pageNumber));
    const res = await userAPI.getUsers(pageNumber, pageSize);
    try {
      dispatch(actions.setUsersAC(res.data.items));
      dispatch(actions.setUsersTotalCountAC(res.data.totalCount));
      dispatch(actions.toggleIsFetchingAC(false));
    } catch (error: any) {
      console.log('Error when you try change page', error);
      handleServerNetworkError(error, dispatch);
    }
  };

export const follow = (userID: string) => async (dispatch: AppThunkDispatch) => {
  dispatch(actions.toggleFollowingProgressAC(true, userID));

  const response = await authAPI.follow(userID);
  try {
    if (response.data.resultCode === 0) {
      dispatch(actions.followSuccessAC(userID));
    } else {
      dispatch(setAppErrorAC('Some error occupied'));
      dispatch(setAppStatusAC('failed'));
    }
    dispatch(actions.toggleFollowingProgressAC(false, userID));
  } catch (error: any) {
    console.log('Error when you try follow user', error);
    handleServerNetworkError(error, dispatch);
  }
};

export const unfollow = (userID: string) => async (dispatch: AppThunkDispatch) => {
  dispatch(actions.toggleFollowingProgressAC(true, userID));
  const response = await authAPI.unfollow(userID);
  try {
    if (response.data.resultCode === 0) {
      dispatch(actions.unFollowSuccessAC(userID));
    }
    dispatch(actions.toggleFollowingProgressAC(false, userID));
  } catch (error: any) {
    handleNetworkError(error, dispatch);
  }
};
