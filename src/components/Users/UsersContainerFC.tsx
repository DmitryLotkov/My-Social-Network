import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../Redux/reduxStore";

import {
    followAC, isFollowingProgressAC,
    setCurrentPageAC,
    setUsersAC, setUsersTotalCountAC, toggleIsFetchingAC,
    unFollowAC,
    UserType
} from "../../Redux/UsersReducer";
import React, {FC, useEffect} from "react";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader";
import {userAPI} from "../api";


const UserContainerFC: FC = () => {

    const dispatch = useDispatch();
    const users = useSelector<AppRootState, UserType[]>((state) => state.UsersPage.users);
    const isFetching = useSelector<AppRootState, boolean>(state => state.UsersPage.isFetching);
    const pageSize = useSelector<AppRootState, number>(state => state.UsersPage.pageSize);
    const currentPage = useSelector<AppRootState, number>(state => state.UsersPage.currentPage);
    const totalUserCount = useSelector<AppRootState, number>(state => state.UsersPage.totalUserCount);
    const followingArr = useSelector<AppRootState, Array<string>>(state => state.UsersPage.following);

    useEffect(() => {
        toggleIsFetchingAC(true);

        userAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(toggleIsFetchingAC(false));
                dispatch(setUsersAC(response.data.items));
                dispatch(setUsersTotalCountAC(response.data.totalCount));
            });
    },[currentPage, pageSize, dispatch])

    const onPageChanged = (pageNumber: number) => {

        dispatch(toggleIsFetchingAC(true));
        dispatch(setCurrentPageAC(pageNumber));
        userAPI.getUsers(pageNumber, pageSize)
            .then(response => {
                dispatch(setUsersAC(response.data.items));
                dispatch(setUsersTotalCountAC(response.data.totalCount));
                dispatch(toggleIsFetchingAC(false));
            }
        )
    }
    const followHandler = (userID:string) => {
        dispatch(followAC(userID));
    }

    const unfollowHandler = (userID:string) => {
        dispatch(unFollowAC(userID));
    }

    const followingIsProgressHandler = (followingIsProgress: boolean, id:string) => {
        dispatch(isFollowingProgressAC(followingIsProgress, id));
    }

    return (
        <div>
            {
                isFetching ?
                <Preloader/> :
                <Users
                    onPageChanged={onPageChanged}
                    currentPage={currentPage}
                    totalUserCount={totalUserCount}
                    pageSize={pageSize}
                    users={users}
                    follow={followHandler}
                    unfollow={unfollowHandler}
                    followingIsProgressHandler={followingIsProgressHandler}
                    followingArr={followingArr}
                />
            }
        </div>
    )
}
export default UserContainerFC
