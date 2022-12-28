import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';

import { appReducer, AppActionsType } from './AppReducer';
import { AuthActionsType, authReducer } from './AuthReducer';
import { ChatActionsType, chatReducer } from './chatReducer';
import { dialogsReducer } from './DialogsReducer';
import { ProfileActionsType, profileReducer } from './ProfileReducer';
import hardcodedUsersReducer from './UserPostsReducer';
import { UsersActionsType, userReducer } from './UsersReducer';

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type RootActionsType =
  | AuthActionsType
  | AppActionsType
  | ProfileActionsType
  | UsersActionsType
  | ChatActionsType;
export type AppThunkDispatch = ThunkDispatch<AppStoreType, null, RootActionsType>;
export const useAppDispatch: () => AppThunkDispatch = useDispatch;
const rootReducer = combineReducers({
  ProfilePage: profileReducer,
  DialogPage: dialogsReducer,
  HardcodedUsers: hardcodedUsersReducer,
  UsersPage: userReducer,
  Auth: authReducer,
  App: appReducer,
  ChatPage: chatReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);
export type AppStoreType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector;
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> =
  ReturnType<PropertiesTypes<T>>;
