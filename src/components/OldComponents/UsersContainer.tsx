import {connect} from "react-redux";

import {AppRootState} from "../../Redux/reduxStore";
import {Dispatch} from "redux";
import {
    followSuccess, toggleFollowingProgressAC,
    setCurrentPageAC,
    setUsersAC, setUsersTotalCountAC, toggleIsFetchingAC,
    unFollowSuccess, follow,
    UserType, unfollow
} from "../../Redux/UsersReducer";
import React from "react";
import axios from "axios";
import {Users} from "../Users/Users";
import {Preloader} from "../Common/Preloader/Preloader";

export type UserPropsType = {
    users: UserType[]

    setUsers: (users: UserType[]) => void
    totalUserCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (serverUserTotalCount: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
    followingArr: Array<string>
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
                        followingInProgress={this.props.followingArr}
                        followTC={unfollow}
                        unfollowTC={follow}
                    />
                }
            </div>
        )
    }
}

let mapStateToProps = (state: AppRootState) => {
    return {
        users: state.UsersPage.items,
        pageSize: state.UsersPage.pageSize,
        totalUserCount: state.UsersPage.totalCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        userId: state.ProfilePage.profile.userId,
        followingIsProgress: state.UsersPage.following
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: string) => {
            dispatch(followSuccess(userID))
        },
        unfollow: (userID: string) => {
            dispatch(unFollowSuccess(userID))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (serverTotalUsersCount: number) => {
            dispatch(setUsersTotalCountAC(serverTotalUsersCount));
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
        followingIsProgressHandler: (followingIsProgress: boolean, id: string) => {
            dispatch(toggleFollowingProgressAC(followingIsProgress, id))
        }

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
