import {ActionsTypes, SideBarType} from "./store";
import {v1} from "uuid";

let initialState: SideBarType = {
    onlineFriends: [
        {id: v1(), avatar: "https://themified.com/friend-finder/images/users/user-4.jpg"},
        {id: v1(), avatar: "https://themified.com/friend-finder/images/users/user-3.jpg"},
        {id: v1(), avatar: "https://themified.com/friend-finder/images/users/user-6.jpg"},
        {id: v1(), avatar: "https://themified.com/friend-finder/images/users/user-2.jpg"},
        {id: v1(), avatar: "https://themified.com/friend-finder/images/users/user-7.jpg"},
        {id: v1(), avatar: "https://themified.com/friend-finder/images/users/user-10.jpg"},
        {id: v1(), avatar: "https://themified.com/friend-finder/images/users/user-9.jpg"},
        {id: v1(), avatar: "https://themified.com/friend-finder/images/users/user-5.jpg"},
        {id: v1(), avatar: "https://themified.com/friend-finder/images/users/user-8.jpg"},
    ],
}
const sidebarReducer = (state: SideBarType = initialState, action: ActionsTypes) => {
    return state
}
export default sidebarReducer;