import React, {useEffect, useState} from 'react';
import styles from "./AnyUserPosts.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import {deleteUsersPostAC, UsersOnWallType} from "../../../store/UserPostsReducer";
import {LikeObjType, maxLikesCount} from "../MyPosts/Post/Post";
import CloseIcon from "@mui/icons-material/Close";
import {IconButton} from "@mui/material";
import {useDispatch} from "react-redux";

const AnyUserPost = ({avatar, name, position, postText, postPhoto, id}: UsersOnWallType) => {
    const dispatch = useDispatch();
    const [likeObj, setLikeObj] = useState<LikeObjType>({likeCount: 5, updated: false});
    const generateLike = () => {
        let likeGenerator = Math.round(Math.random() * maxLikesCount)
        setLikeObj({likeCount: likeGenerator, updated: false});
    };
    const addLikeHandler = () =>{
        if(!likeObj.updated){
            setLikeObj({likeCount: likeObj.likeCount +1, updated: true})
        } else{
            setLikeObj({likeCount: likeObj.likeCount -1, updated: false})
        }
    }
    const deletePostHandler = (userId: string) =>{
        dispatch(deleteUsersPostAC(userId))
    }
    useEffect(() => {
        generateLike()
    }, []);
    return (
        <div className={styles.anyUserPost}>
            <div className={styles.userWrapper}>
                <div className={styles.userPhotoAndDescriptionBlock}>
                    <img src={avatar} alt={"avatar"}/>
                    <div className={styles.userDescription}>
                        <strong>{name}</strong>
                        <div className={styles.userPosition}>{position}</div>
                    </div>
                </div>
                <IconButton onClick={() => deletePostHandler(id)}>
                    <CloseIcon/>
                </IconButton>
            </div>
            <p>{postText}</p>
            {postPhoto && <img className={styles.postPhoto} src={postPhoto} alt="postPhoto"/>}

            <div className={styles.likeBlock}>
                {likeObj.updated ? <FavoriteIcon onClick={addLikeHandler}/> : <FavoriteBorderIcon onClick={addLikeHandler}/> } {likeObj.likeCount}
            </div>
        </div>
    );
};

export default AnyUserPost;