import {useDispatch} from "react-redux";
import {
    follow, getUsersTC, onPageChangedTC, unfollow
} from "../../store/UsersReducer";
import React, {FC, useEffect} from "react";
import {Users} from "./Users";
import {Preloader} from "../../components/Common/Preloader/Preloader";
import {
    currentPageSelector, followingArrSelector,
    isFetchingSelector,
    pageSizeSelector,
    totalUserCountSelector,
    usersSelector
} from "../../components/Common/Selectors/Selectors";
import {useAppSelector} from "../../store/store";



const UserContainerFC: FC = React.memo(() => {

    const dispatch = useDispatch();
    const users = useAppSelector(usersSelector);
    const isFetching = useAppSelector(isFetchingSelector);
    const pageSize = useAppSelector(pageSizeSelector);
    const currentPage = useAppSelector(currentPageSelector);
    const totalUserCount = useAppSelector(totalUserCountSelector);
    const followingArr = useAppSelector(followingArrSelector);
    // let Redirect= WithAuthRedirect(Users);

    useEffect(() => {
        dispatch(getUsersTC());
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
