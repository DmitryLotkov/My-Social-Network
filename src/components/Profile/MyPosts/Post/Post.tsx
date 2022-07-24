import React, {useEffect, useState} from "react";
import styles from "./Post.module.scss"
import {MyProfilePhoto} from "../../../Common/MyProfilePhoto/MyProfilePhoto";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {deleteMyPostAC} from "../../../../store/UserPostsReducer";
import CloseIcon from "@mui/icons-material/Close";
import {useDispatch} from "react-redux";
import {IconButton} from "@mui/material";

export const maxLikesCount = 300;
type MyPostsPropsType = {
    id: string
    message: string
    likeCount: number
}
export type LikeObjType = {
    likeCount: number
    updated: boolean
}

export function Post(props: MyPostsPropsType) {
    const [likeObj, setLikeObj] = useState<LikeObjType>({likeCount: 5, updated: false});
    const dispatch = useDispatch();
    const deletePost = (userId: string) => {
        dispatch(deleteMyPostAC(userId))
    }
    const generateLike = () => {
        let likeGenerator = Math.round(Math.random() * maxLikesCount)
        setLikeObj({likeCount: likeGenerator, updated: false});
    };
    const addLikeHandler = () => {
        if (!likeObj.updated) {
            setLikeObj({likeCount: likeObj.likeCount + 1, updated: true})
        } else {
            setLikeObj({likeCount: likeObj.likeCount - 1, updated: false})
        }

    }
    useEffect(() => {
        generateLike()
    }, []);

    return (
        <div className={styles.itemWrapper}>
            <div className={styles.avatarAndClose}>
                <MyProfilePhoto/>
                <IconButton style={{height: "40px"}} onClick={() => deletePost(props.id)}>
                    <CloseIcon/>
                </IconButton>

            </div>
            <p>
                {props.message}
            </p>
            <div className={styles.likeBlock}>
                {likeObj.updated ? <FavoriteIcon onClick={addLikeHandler}/> :
                    <FavoriteBorderIcon onClick={addLikeHandler}/>} {likeObj.likeCount}
            </div>
        </div>
    );
}