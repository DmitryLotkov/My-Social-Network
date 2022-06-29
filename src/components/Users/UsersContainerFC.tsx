import {useDispatch, useSelector} from "react-redux";
import {
    follow, getUsersTC, onPageChangedTC, unfollow
} from "../../Redux/UsersReducer";
import React, {FC, useEffect} from "react";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {
    currentPageSelector, followingArrSelector,
    isFetchingSelector,
    pageSizeSelector,
    totalUserCountSelector,
    usersSelector
} from "../Common/Selectors/Selectors";



const UserContainerFC: FC = React.memo(() => {

    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const isFetching = useSelector(isFetchingSelector);
    const pageSize = useSelector(pageSizeSelector);
    const currentPage = useSelector(currentPageSelector);
    const totalUserCount = useSelector(totalUserCountSelector);
    const followingArr = useSelector(followingArrSelector);
    // let Redirect= WithAuthRedirect(Users);
    console.log(users)
    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize));
    }, [currentPage, pageSize, dispatch])

    const onPageChanged = (pageNumber: number) => {
        dispatch(onPageChangedTC(pageSize, pageNumber));
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
                    <Users onPageChanged={onPageChanged}
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
})
export default UserContainerFC
