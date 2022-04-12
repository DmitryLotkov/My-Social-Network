import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./NavBarReducer";
import {userReducer} from "./UsersReducer";
import {authReducer} from "./AuthReducer";
import thunk from 'redux-thunk'
import {loginReducer} from "./Login-reducer";


export type AppRootState = ReturnType <typeof rootReducer>
const rootReducer = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogsReducer,
    SideBar: sidebarReducer,
    UsersPage: userReducer,
    Auth: authReducer,
    Login: loginReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.store = store