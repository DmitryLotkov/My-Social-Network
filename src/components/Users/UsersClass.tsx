import React from "react";
import {UserType} from "../../Redux/UsersReducer";
import style from "./users.module.css"
import userPhoto from "./../../Images/defaultUserImage.jpg";
import axios from "axios";

type UserPropsType = {
    users: UserType[]
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
}
let defaultUserPhoto:string = userPhoto;
/*let users = [
    {
        id: v1(),
        photoURL: "https://themified.com/friend-finder/images/users/user-6.jpg",
        fullName: "Dmitry Ivanov",
        followed: true,
        status: "Not bad",
        location: {city: "Minsk", country: "Belarus,"}
    },
    {
        id: v1(),
        photoURL: "https://themified.com/friend-finder/images/users/user-7.jpg",
        fullName: "Sergey Petrov",
        followed: true,
        status: "=/",
        location: {city: "Warshaw", country: "Poland, "}
    },
    {
        id: v1(),
        photoURL: "https://themified.com/friend-finder/images/users/user-8.jpg",
        fullName: "Ivan Akunin",
        followed: false,
        status: ":)",
        location: {city: "Grodno", country: "Belarus,"}
    },
    {
        id: v1(),
        photoURL: "https://themified.com/friend-finder/images/users/user-2.jpg",
        fullName: "Maya Vishnevskaya",
        followed: false,
        status: "People are awesome))",
        location: {city: "Paris", country: "France,"}
    },
]*/
export class UsersClass extends React.Component<UserPropsType>{

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger;
                this.props.setUsers(response.data.items);
            }
        )
    }

    render(){
        return (

            <div className={style.wrapper}>
            {this.props.users.map(u =>
                <div key={u.id}>
                    <div className={style.friendBlock}>
                        <div className={style.avatarButton}>
                            <img className={style.avatar} src={u.photos.small ? u.photos.small:defaultUserPhoto
                                }
                                alt={"user"}/>
                            <span className={style.button}>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>follow</button>
                            }
                            </span>
                        </div>
                        <div className={style.inner}>
                            <div className={style.nameStatus}>
                                <div className={style.name}>{u.name}</div>
                                <div className={style.status}>{ `Status:  ${u.status}`}</div>
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
}