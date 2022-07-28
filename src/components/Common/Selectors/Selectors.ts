import {AppRootStateType} from "../../../store/store";
import {UserType} from "../../../store/UsersReducer";
import {ProfileDataType} from "../../../store/ProfileReducer";

export const statusSelector = (state:AppRootStateType):string =>{
    return state.ProfilePage.status;
}
export const myIDSelector = (state:AppRootStateType):number =>{
    return state.Auth.data.id;
}
export const profileSelector = (state:AppRootStateType):ProfileDataType =>{
    return state.ProfilePage.profile;
}
export const isLoggedInSelector = (state:AppRootStateType):boolean =>{
    return state.Auth.isLoggedIn;
}
export const isInitializedSelector = (state:AppRootStateType):boolean =>{
    return state.Auth.isInitialized;
}
export const isFetchingSelector = (state:AppRootStateType):boolean =>{
    return state.UsersPage.isFetching;
}
export const usersSelector = (state:AppRootStateType):UserType[] =>{
    return state.UsersPage.items;
}
export const pageSizeSelector = (state:AppRootStateType):number =>{
    return state.UsersPage.pageSize;
}
export const currentPageSelector = (state:AppRootStateType):number =>{
    return state.UsersPage.currentPage;
}
export const totalUserCountSelector = (state:AppRootStateType):number =>{
    return state.UsersPage.totalCount;
}
export const followingArrSelector = (state:AppRootStateType):Array<string> =>{
    return state.UsersPage.following;
}

