import {connect} from "react-redux";
import {AppRootState} from "../../Redux/reduxStore";
import {Dispatch} from "redux";
import {
    follow,
    setCurrentPage,
    setUsers, setUsersTotalCount, toggleIsFetching,
    unFollow,
    UserType
} from "../../Redux/UsersReducer";
import React from "react";
import axios from "axios";
import {Users} from "../Users/Users";
import {Preloader} from "../Common/Preloader";

export type UserPropsType = {
    users: UserType[]
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
    totalUserCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (serverUserTotalCount: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

export class UsersContainer extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            }
        )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            }
        )
    }
    render() {

        return (
            <div>
                {this.props.isFetching ?
                    <Preloader/> :
                    <Users
                        onPageChanged={this.onPageChanged}
                        currentPage={this.props.currentPage}
                        totalUserCount={this.props.totalUserCount}
                        pageSize={this.props.pageSize}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}/>
                   }
            </div>
        )
    }
}

let mapStateToProps = (state: AppRootState) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUserCount: state.UsersPage.totalUserCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        userId: state.ProfilePage.profile.userId
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: string) => {
            dispatch(follow(userID))
        },
        unfollow: (userID: string) => {
            dispatch(unFollow(userID))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPage(currentPage));
        },
        setTotalUsersCount: (serverTotalUsersCount: number) => {
            dispatch(setUsersTotalCount(serverTotalUsersCount));
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetching(isFetching))
        },
    }
}

//          {follow,
//         unFollow,
//         setUsers,
//         setCurrentPage,
//         setUsersTotalCount,
//         toggleIsFetching
//         }
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)