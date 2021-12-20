import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./NavBarReducer";


export type AppStoreType = typeof store
export type AppStateType = ReturnType <typeof rootReducer>
let rootReducer = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogsReducer,
    SideBar: sidebarReducer
})
export let store = createStore(rootReducer);