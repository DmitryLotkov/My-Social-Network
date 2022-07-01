import React, {ChangeEvent} from "react";
import style from "./users.module.scss";
import userPhoto from "../../Images/defaultUserImage.jpg";
import {UserType} from "../../Redux/UsersReducer";
import Pagination from '@mui/material/Pagination';
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";


type usersPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    followingInProgress: Array<string>
    followTC: (userID: string) => void
    unfollowTC: (userID: string) => void
}

export function Users({users, totalUserCount, currentPage, pageSize, onPageChanged, followingInProgress,
                          unfollowTC, followTC}: usersPropsType) {

    const pagesCount = Math.ceil(totalUserCount / pageSize);
    const defaultUserPhoto: string = userPhoto;
    const onPageHandler = (event: ChangeEvent<unknown>, page: number) => {
        onPageChanged(page);
    }
    const navigate = useNavigate();

    return <div className={style.usersWrapper}>
        <Pagination color={"primary"}
                    onChange={onPageHandler}
                    size={"small"}
                    variant={"outlined"}
                    shape="rounded"
                    count={pagesCount}
                    page={currentPage}
        />
        {users.map(user =>

            <div key={user.id}>
                <div className={style.usersBlock}>
                    <div className={style.avatarAndFollowButton}>
                        <img onClick={() => navigate(`/profile/${user.id}`)}
                             className={style.avatar} src={user.photos.small ? user.photos.small : defaultUserPhoto}
                             alt={"user"}/>
                        <span>
                            {user.followed ?
                                <Button disabled={followingInProgress
                                    .some(id => id === user.id)}
                                        onClick={() => {
                                            //ниже вызывается thunk creator из пропсов, в userContainerFC unfollowTC оборачивается dispatch
                                            unfollowTC(user.id)
                                        }
                                        }>Unfollow</Button>

                                : <Button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={
                                              () => {
                                                  //ниже вызывается thunk creator из пропсов, в userContainerFC unfollowTC оборачивается dispatch
                                                  //thunk creator нужен для связи DAL и BLL минуя UI
                                                  followTC(user.id)
                                              }
                                          }>Follow</Button>
                            }
                            </span>
                    </div>
                    <div className={style.nameAndStatus}>
                        <h3 className={style.name}>
                            <div>{user.name}</div>
                        </h3>
                        <div className={style.status}>{`Status:  ${user.status ?? "no status"}`}</div>

                    </div>
                </div>
            </div>)}
    </div>

}

