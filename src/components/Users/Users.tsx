import React, {ChangeEvent} from "react";
import style from "./users.module.css";
import userPhoto from "../../Images/defaultUserImage.jpg";
import {UserType} from "../../Redux/UsersReducer";
import Pagination from '@material-ui/lab/Pagination';
import {useNavigate} from "react-router-dom";

type UsersPresentationComponentType ={
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    follow: (userID: string) => void
    unfollow: (userID: string) => void
}
export function Users(props:UsersPresentationComponentType){

    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    const defaultUserPhoto: string = userPhoto;
    let onPageHandler = (event: ChangeEvent<unknown>, page: number) =>{
        props.onPageChanged(page);
    }
    let navigate = useNavigate();
    return <div className={style.wrapper}>
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
                        <div className={style.friendBlock}>
                            <div className={style.avatarButton}>
                                <img onClick={() => navigate(`/profile/${u.id}`)}
                                     className={style.avatar} src={u.photos.small ? u.photos.small : defaultUserPhoto}
                                     alt={"user"}/>
                                <span className={style.button}>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>follow</button>
                            }
                            </span>
                            </div>
                            <div className={style.inner}>
                                <div className={style.nameStatus}>
                                    <div className={style.name}>{u.name}</div>
                                    <div className={style.status}>{`Status:  ${u.status ?? "no status"}`}</div>
                                </div>
                                <div className={style.location}>
                                    <div className={style.country}>{"u.location.country"}</div>
                                    <div>{"u.location.city"}</div>
                                </div>
                            </div>


                        </div>
                    </div>)}
            </div>

}

