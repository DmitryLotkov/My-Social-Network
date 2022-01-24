import React from "react";
import style from "./users.module.css";
import styles from "./users.module.css";
import userPhoto from "../../Images/defaultUserImage.jpg";
import {UserType} from "../../Redux/UsersReducer";

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
    const pages:Array<number> = [];
    const defaultUserPhoto: string = userPhoto;

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={style.wrapper}>

                <div className={style.pagesWrapper}>
                    {pages.map((page, index) => {
                        return <span key={index}
                                     className={props.currentPage === page ? styles.selectedPage : styles.allPages}
                                     onClick={()=> props.onPageChanged(page)}>
                            {page}</span>
                    })}


                </div>
                {props.users.map(u =>
                    <div key={u.id}>
                        <div className={style.friendBlock}>
                            <div className={style.avatarButton}>
                                <img className={style.avatar} src={u.photos.small ? u.photos.small : defaultUserPhoto
                                }
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
                                    <div className={style.status}>{`Status:  ${u.status}`}</div>
                                </div>
                                <div className={style.location}>
                                    <div className={style.country}>{"u.location.country"}</div>
                                    <div>{"u.location.city"}</div>
                                </div>
                            </div>


                        </div>
                    </div>)}
            </div>
            )
}