import {applyMiddleware, combineReducers, compose, createStore} from "redux";


import sidebarReducer from "./NavBarReducer";
import {UsersActionsType, userReducer} from "./UsersReducer";
import {AuthActionsType, authReducer} from "./AuthReducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {appReducer, AppActionsType} from "./AppReducer";
import {ProfileActionsType, profileReducer} from "./ProfileReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {dialogsReducer} from "./DialogsReducer";




export type AppRootStateType = ReturnType <typeof rootReducer>
export type RootActionsType = AuthActionsType | AppActionsType | ProfileActionsType | UsersActionsType
export type AppThunkDispatch = ThunkDispatch<AppStoreType, null, RootActionsType>;
export const useAppDispatch: () => AppThunkDispatch = useDispatch;
const rootReducer = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogsReducer,
    SideBar: sidebarReducer,
    UsersPage: userReducer,
    Auth: authReducer,
    App: appReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
export type AppStoreType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector;


// @ts-ignore
window.store = store