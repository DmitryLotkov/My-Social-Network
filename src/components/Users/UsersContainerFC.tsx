import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../Redux/reduxStore";
import {
    follow, getUsersTC, onPageChangedCTC,
    UserType, unfollow
} from "../../Redux/UsersReducer";
import React, {FC, useEffect} from "react";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {WithAuthRedirect} from "../HOC/withAuthRedirect";


const UserContainerFC: FC = () => {

    const dispatch = useDispatch();
    const users = useSelector<AppRootState, UserType[]>((state) => state.UsersPage.items);
    const isFetching = useSelector<AppRootState, boolean>(state => state.UsersPage.isFetching);
    const pageSize = useSelector<AppRootState, number>(state => state.UsersPage.pageSize);
    const currentPage = useSelector<AppRootState, number>(state => state.UsersPage.currentPage);
    const totalUserCount = useSelector<AppRootState, number>(state => state.UsersPage.totalCount);
    const followingArr = useSelector<AppRootState, Array<string>>(state => state.UsersPage.following);
    let Redirect= WithAuthRedirect(Users);

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
        <>
            {
                isFetching ?
                    <Preloader/> :
                    <Redirect onPageChanged={onPageChanged}
                                            currentPage={currentPage}
                                            totalUserCount={totalUserCount}
                                            pageSize={pageSize}
                                            users={users}
                                            followTC={followTC}
                                            unfollowTC={unfollowTC}
                                            followingInProgress={followingArr}/>
            }
        </>
    )
}
export default UserContainerFC
