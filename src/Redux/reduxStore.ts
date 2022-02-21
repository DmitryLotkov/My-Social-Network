import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./NavBarReducer";
import {userReducer} from "./UsersReducer";
import {authReducer} from "./authReducer";



export type AppRootState = ReturnType <typeof rootReducer>
const rootReducer = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogsReducer,
    SideBar: sidebarReducer,
    UsersPage: userReducer,
    auth: authReducer,
})
export const store = createStore(rootReducer);

// @ts-ignore
window.store = store