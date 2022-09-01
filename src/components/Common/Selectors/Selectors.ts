import { ChatMessageType, StatusType } from '../../../store/chatReducer';
import { ProfileDataType } from '../../../store/ProfileReducer';
import { AppRootStateType } from '../../../store/store';
import { UserType } from '../../../store/UsersReducer';

export const statusSelector = (state: AppRootStateType): string =>
  state.ProfilePage.status;
export const myIDSelector = (state: AppRootStateType): number => state.Auth.data.id;
export const profileSelector = (state: AppRootStateType): ProfileDataType =>
  state.ProfilePage.profile;
export const isLoggedInSelector = (state: AppRootStateType): boolean =>
  state.Auth.isLoggedIn;
export const isInitializedSelector = (state: AppRootStateType): boolean =>
  state.Auth.isInitialized;
export const isFetchingSelector = (state: AppRootStateType): boolean =>
  state.UsersPage.isFetching;
export const usersSelector = (state: AppRootStateType): UserType[] =>
  state.UsersPage.items;
export const pageSizeSelector = (state: AppRootStateType): number =>
  state.UsersPage.pageSize;
export const currentPageSelector = (state: AppRootStateType): number =>
  state.UsersPage.currentPage;
export const totalUserCountSelector = (state: AppRootStateType): number =>
  state.UsersPage.totalCount;
export const followingArrSelector = (state: AppRootStateType): Array<string> =>
  state.UsersPage.following;
export const chatMessageSelector = (state: AppRootStateType): Array<ChatMessageType> =>
  state.ChatPage.messages;
export const chatStatusSelector = (state: AppRootStateType): StatusType =>
  state.ChatPage.status;
export const chatStartMessageCountSelector = (state: AppRootStateType): number =>
  state.ChatPage.startMessagesCount;
