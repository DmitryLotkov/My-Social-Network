import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../Redux/UsersReducer";

let mapStateToProps = (state:AppStateType) => {
    return {
        users: state.UsersPage.users
    }
}
let mapDispatchToProps = (dispatch:Dispatch) =>{
    return {
        follow: (userID: string) =>{
            dispatch(followAC(userID))
        },
        unfollow: (userID: string) =>{
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: UserType[]) =>{
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)