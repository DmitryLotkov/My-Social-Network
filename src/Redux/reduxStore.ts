import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./NavBarReducer";


export type AppStoreType = typeof store
export type AppStateType = ReturnType <typeof reducers>
let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogsReducer,
    SideBar: sidebarReducer
})
export let store = createStore(reducers);