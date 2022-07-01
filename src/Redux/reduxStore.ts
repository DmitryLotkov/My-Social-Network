import {applyMiddleware, combineReducers, createStore} from "redux";

import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./NavBarReducer";
import {userReducer} from "./UsersReducer";
import {authReducer} from "./AuthReducer";
import thunk from 'redux-thunk'
import {appReducer} from "./AppReducer";
import {profileReducer} from "./ProfileReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";



export type AppRootStateType = ReturnType <typeof rootReducer>
const rootReducer = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogsReducer,
    SideBar: sidebarReducer,
    UsersPage: userReducer,
    Auth: authReducer,
    App: appReducer
})
export type AppStoreType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector;
export const store = createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.store = store