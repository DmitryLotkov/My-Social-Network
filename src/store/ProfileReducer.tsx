import { profileAPI } from '../api/api';
import {
  handleNetworkError,
  handleServerAppError,
  handleServerNetworkError,
} from '../utils/error.utils';

import { setAppStatusAC } from './AppReducer';
import { setMyProfileAC } from './AuthReducer';
import { AppStoreType, AppThunkDispatch, InferActionsTypes } from './store';

// types

export type ProfileActionsType = InferActionsTypes<typeof actions>;
/* export type PostTextType = {
  text: string;
}; */
export type ProfilePageType = {
  profile: ProfileDataType;
  status: string;
};
export type PostType = {
  id: string;
  message: string;
  likesCount: number;
};
export type UserProfileContactType = {
  facebook: string;
  website: string;
  vk: string;
  twitter: string;
  instagram: string;
  youtube: string;
  github: string;
  mainLink: string;
};
export type userProfilePhotosType = {
  small: string;
  large: string;
};
export type ProfileDataType = {
  userId: number;
  aboutMe?: string;
  lookingForAJob?: boolean;
  lookingForAJobDescription?: string;
  fullName?: string;
  contacts: Partial<UserProfileContactType>;
  photos?: userProfilePhotosType;
};

// actions
export const actions = {
  /* updateNewPostTextAC: (text: PostTextType) =>
    ({ type: 'PROFILE/UPDATE-NEW-POST-TEXT', text } as const), */
  setUserProfileAC: (profile: ProfileDataType) =>
    ({ type: 'PROFILE/SET-SOME-USER-PROFILE', profile } as const),
  setStatusAC: (status: string) => ({ type: 'PROFILE/SET-STATUS', status } as const),
};

const initialState: ProfilePageType = {
  status: '',
  profile: {
    userId: 0,
    fullName: '',
    lookingForAJob: true,
    lookingForAJobDescription: '',
    aboutMe: '',
    contacts: {
      facebook: '',
      github: '',
      instagram: '',
      mainLink: '',
      twitter: '',
      vk: '',
      website: '',
      youtube: '',
    },
    photos: {
      small: '',
      large: '',
    },
  },
};
export const profileReducer = (
  state: ProfilePageType = initialState,
  action: ProfileActionsType,
): ProfilePageType => {
  switch (action.type) {
    case 'PROFILE/SET-SOME-USER-PROFILE':
      return { ...state, profile: action.profile };
    case 'PROFILE/SET-STATUS':
      return { ...state, status: action.status };
    default:
      return state;
  }
};
// thunks
export const getProfileTC =
  (userId: number | null, isMyProfile?: boolean) =>
  async (dispatch: AppThunkDispatch) => {
    dispatch(setAppStatusAC('loading'));
    try {
      const res = await profileAPI.getProfile(userId);
      if (isMyProfile) {
        dispatch(setMyProfileAC(res.data));
      } else {
        dispatch(actions.setUserProfileAC(res.data));
      }
      dispatch(setAppStatusAC('succeeded'));
    } catch (error: any) {
      handleNetworkError(error, dispatch);
    }
  };

export const getUserStatusTC =
  (userId: number | null) => async (dispatch: AppThunkDispatch) => {
    dispatch(setAppStatusAC('loading'));

    try {
      const res = await profileAPI.getStatus(userId);
      if (res.status === 200) {
        dispatch(actions.setStatusAC(res.data));
        dispatch(setAppStatusAC('succeeded'));
      } else {
        handleServerAppError(res.data, dispatch);
      }
    } catch (error: any) {
      console.log('Error when you try get user status', error);
      handleServerNetworkError(error, dispatch);
    }
  };

export const updateUserStatusTC =
  (status: string) => async (dispatch: AppThunkDispatch) => {
    dispatch(setAppStatusAC('loading'));

    try {
      const res = await profileAPI.updateStatus(status);
      if (res.data.resultCode === 0) {
        dispatch(actions.setStatusAC(status));
        dispatch(setAppStatusAC('succeeded'));
      } else {
        handleServerAppError(res.data, dispatch);
      }
    } catch (error: any) {
      console.log('Error when you try update user status', error);
      handleServerNetworkError(error, dispatch);
    }
  };

export const uploadAvatarTC =
  (photoFile: File) =>
  async (dispatch: AppThunkDispatch, getState: () => AppStoreType) => {
    dispatch(setAppStatusAC('loading'));
    const userId = getState().Auth.data.id;
    try {
      const res = await profileAPI.uploadAvatar(photoFile);
      if (res.data.resultCode === 0) {
        dispatch(setAppStatusAC('succeeded'));
        await dispatch(getProfileTC(userId));
      } else {
        handleServerAppError(res.data, dispatch);
      }
    } catch (error: any) {
      console.log('Error when you try upload avatar', error);
      handleServerNetworkError(error, dispatch);
    }
  };
export const updateProfileTC =
  (profile: ProfileDataType) =>
  async (dispatch: AppThunkDispatch, getState: () => AppStoreType) => {
    dispatch(setAppStatusAC('loading'));

    const userId = getState().Auth.data.id;
    try {
      const res = await profileAPI.updateProfile(profile);
      if (res.data.resultCode === 0) {
        await dispatch(getProfileTC(userId, true));
        dispatch(setAppStatusAC('succeeded'));
      } else {
        handleServerAppError(res.data, dispatch);
      }
    } catch (error: any) {
      console.log('Error when you try update profile', error);
      handleServerNetworkError(error, dispatch);
    }
  };
