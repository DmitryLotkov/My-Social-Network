import React, {useEffect, useState} from "react";
import styles from "./Post.module.scss"
import {MyProfilePhoto} from "../../../Common/MyProfilePhoto/MyProfilePhoto";

type MyPostsPropsType = {
    message: string
    likeCount: number
}

export function Post(props: MyPostsPropsType) {
    const [likesCount, setLikesCount] = useState<number>();
    const maxLikesCount = 1000;
    const generateLike = () => {
        setLikesCount(Math.round(Math.random() * maxLikesCount));
    };
    useEffect(() => {
        generateLike()
    }, []);

    return (
        <div className={styles.itemWrapper}>
            <div className={styles.userAndLoginBlock}>
                <MyProfilePhoto/>
            </div>
            <div>
                {props.message}
            </div>
            <div>
                <span>Like: </span>{props.likeCount !== 0 ? props.likeCount : likesCount}
            </div>
        </div>
    );
}