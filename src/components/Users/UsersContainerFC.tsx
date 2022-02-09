import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../Redux/reduxStore";

import {
    follow,
    setCurrentPage,
    setUsers, setUsersTotalCount, toggleIsFetching,
    unFollow,
    UserType
} from "../../Redux/UsersReducer";
import React, {FC, useEffect} from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader";

const UserContainerFC: FC = () => {

    const dispatch = useDispatch();
    const users = useSelector<AppRootState, UserType[]>((state) => state.UsersPage.users);
    const isFetching = useSelector<AppRootState, boolean>(state => state.UsersPage.isFetching);
    const pageSize = useSelector<AppRootState, number>(state => state.UsersPage.pageSize);
    const currentPage = useSelector<AppRootState, number>(state => state.UsersPage.currentPage);
    const totalUserCount = useSelector<AppRootState, number>(state => state.UsersPage.totalUserCount);

    useEffect(() => {
        toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`).then(response => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(response.data.items));
                dispatch(setUsersTotalCount(response.data.totalCount));
            }
        )
    }, [currentPage, pageSize, dispatch])

    const onPageChanged = (pageNumber: number) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(pageNumber));
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`).then(response => {
                dispatch(setUsers(response.data.items));
                dispatch(setUsersTotalCount(response.data.totalCount));
                dispatch(toggleIsFetching(false));
            }
        )
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
                    follow={follow}
                    unfollow={unFollow}/>
            }
        </div>
    )
}
export default UserContainerFC
