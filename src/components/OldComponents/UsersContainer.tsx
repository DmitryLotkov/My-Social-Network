import React from 'react';

import axios from 'axios';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Users } from '../../Pages/Users/Users';
import { AppRootStateType } from '../../store/store';
import { actions, follow, unfollow, UserType } from '../../store/UsersReducer';
import { Preloader } from '../Common/Preloader/Preloader';

export type UserPropsType = {
  users: UserType[];

  setUsers: (users: UserType[]) => void;
  totalUserCount: number;
  pageSize: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  setTotalUsersCount: (serverUserTotalCount: number) => void;
  isFetching: boolean;
  toggleIsFetching: (isFetching: boolean) => void;
  followingArr: Array<string>;
};

export class UsersContainer extends React.Component<UserPropsType> {
  componentDidMount() {
    const { toggleIsFetching, setUsers, setTotalUsersCount, currentPage, pageSize } =
      this.props;
    toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
      )
      .then(response => {
        toggleIsFetching(false);
        setUsers(response.data.items);
        setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    const { toggleIsFetching, setCurrentPage, setUsers, setTotalUsersCount, pageSize } =
      this.props;
    toggleIsFetching(true);
    setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`,
      )
      .then(response => {
        setUsers(response.data.items);
        setTotalUsersCount(response.data.totalCount);
        toggleIsFetching(false);
      });
  };

  render() {
    const { isFetching, currentPage, totalUserCount, followingArr, pageSize, users } =
      this.props;
    return (
      <div>
        {isFetching ? (
          <Preloader />
        ) : (
          <Users
            onPageChanged={this.onPageChanged}
            currentPage={currentPage}
            totalUserCount={totalUserCount}
            pageSize={pageSize}
            users={users}
            followingInProgress={followingArr}
            followTC={unfollow}
            unfollowTC={follow}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: AppRootStateType) => ({
  users: state.UsersPage.items,
  pageSize: state.UsersPage.pageSize,
  totalUserCount: state.UsersPage.totalCount,
  currentPage: state.UsersPage.currentPage,
  isFetching: state.UsersPage.isFetching,
  userId: state.Auth.data.id,
  followingIsProgress: state.UsersPage.following,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  follow: (userID: string) => {
    dispatch(actions.followSuccessAC(userID));
  },
  unfollow: (userID: string) => {
    dispatch(actions.unFollowSuccessAC(userID));
  },
  setUsers: (users: UserType[]) => {
    dispatch(actions.setUsersAC(users));
  },
  setCurrentPage: (currentPage: number) => {
    dispatch(actions.setCurrentPageAC(currentPage));
  },
  setTotalUsersCount: (serverTotalUsersCount: number) => {
    dispatch(actions.setUsersTotalCountAC(serverTotalUsersCount));
  },
  toggleIsFetching: (isFetching: boolean) => {
    dispatch(actions.toggleIsFetchingAC(isFetching));
  },
  followingIsProgressHandler: (followingIsProgress: boolean, id: string) => {
    dispatch(actions.toggleFollowingProgressAC(followingIsProgress, id));
  },
});

//          {follow,
//         unFollow,
//         setUsers,
//         setCurrentPage,
//         setUsersTotalCount,
//         toggleIsFetching
//         }
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
