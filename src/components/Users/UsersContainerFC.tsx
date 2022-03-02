import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../Redux/reduxStore";
import {
    follow, getUsersTC, onPageChangedCTC,
    UserType, unfollow
} from "../../Redux/UsersReducer";
import React, {FC, useEffect} from "react";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader";


const UserContainerFC: FC = () => {

    const dispatch = useDispatch();
    const users = useSelector<AppRootState, UserType[]>((state) => state.UsersPage.users);
    const isFetching = useSelector<AppRootState, boolean>(state => state.UsersPage.isFetching);
    const pageSize = useSelector<AppRootState, number>(state => state.UsersPage.pageSize);
    const currentPage = useSelector<AppRootState, number>(state => state.UsersPage.currentPage);
    const totalUserCount = useSelector<AppRootState, number>(state => state.UsersPage.totalUserCount);
    const followingArr = useSelector<AppRootState, Array<string>>(state => state.UsersPage.following);

    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize));
    }, [currentPage, pageSize, dispatch])

    const onPageChanged = (pageNumber: number) => {
        dispatch(onPageChangedCTC(pageSize, pageNumber));
    }
    const unfollowTC = (userID: string) => {

        dispatch(unfollow(userID))
    }
    const followTC = (userID: string) => {

        dispatch(follow(userID))
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
                        followTC={followTC}
                        unfollowTC={unfollowTC}
                        // follow={followHandler}
                        // unfollow={unfollowHandler}
                        // toggleFollowingProgress={toggleFollowingProgress}
                        followingInProgress={followingArr}
                    />
            }
        </div>
    )
}
export default UserContainerFC
