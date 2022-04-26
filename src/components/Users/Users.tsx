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

export function Users(props: usersPropsType) {

    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    const defaultUserPhoto: string = userPhoto;
    const onPageHandler = (event: ChangeEvent<unknown>, page: number) => {
        props.onPageChanged(page);
    }
    const navigate = useNavigate();

    return <div className={style.usersWrapper}>
        <Pagination color={"primary"}
                    onChange={onPageHandler}
                    size={"small"}
                    variant={"outlined"}
                    shape="rounded"
                    count={pagesCount}
                    page={props.currentPage}
        />
        {props.users.map(u =>

            <div key={u.id}>
                <div className={style.usersBlock}>
                    <div className={style.avatarAndFollowButton}>
                        <img onClick={() => navigate(`/profile/${u.id}`)}
                             className={style.avatar} src={u.photos.small ? u.photos.small : defaultUserPhoto}
                             alt={"user"}/>
                        <span>
                            {u.followed ?
                                <Button disabled={props.followingInProgress
                                    .some(id => id === u.id)}
                                        onClick={() => {
                                            //ниже вызывается thunk creator из пропсов, в userContainerFC unfollowTC оборачивается dispatch
                                            props.unfollowTC(u.id)
                                        }
                                        }>Unfollow</Button>

                                : <Button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={
                                              () => {
                                                  //ниже вызывается thunk creator из пропсов, в userContainerFC unfollowTC оборачивается dispatch
                                                  //thunk creator нужен для связи DAL и BLL минуя UI
                                                  props.followTC(u.id)
                                              }
                                          }>Follow</Button>
                            }
                            </span>
                    </div>
                    <div className={style.nameAndStatus}>
                        <h3 className={style.name}>
                            <div>{u.name}</div>
                        </h3>
                        <div className={style.status}>{`Status:  ${u.status ?? "no status"}`}</div>

                        {/*<div className={style.location}>
                            <div className={style.country}>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>*/}
                    </div>


                </div>
            </div>)}
    </div>

}

