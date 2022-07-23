import React, {useEffect, useState} from 'react';
import styles from "./AnyUserPosts.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import {UsersOnWallType} from "../../../Redux/HardCodedUserReducer";
import {likeObjType, maxLikesCount} from "../MyPosts/Post/Post";

const AnyUserPost = ({avatar, name, position, postText, postPhoto}: UsersOnWallType) => {
    const [likeObj, setLikeObj] = useState<likeObjType>({likeCount: 5, updated: false});

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
    useEffect(() => {
        generateLike()
    }, []);
    return (
        <div className={styles.anyUserPost}>
            <div className={styles.userPhotoAndDescriptionBlock}>
                <img src={avatar} alt={"avatar"}/>
                <div className={styles.userDescription}>
                    <strong>{name}</strong>
                    <div className={styles.userPosition}>{position}</div>
                </div>
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