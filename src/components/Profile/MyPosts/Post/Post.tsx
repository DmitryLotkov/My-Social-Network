import React, {useEffect, useState} from "react";
import styles from "./Post.module.scss"
import {MyProfilePhoto} from "../../../Common/MyProfilePhoto/MyProfilePhoto";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
export const maxLikesCount = 300;
type MyPostsPropsType = {
    message: string
    likeCount: number
}
export type likeObjType = {
    likeCount: number
    updated: boolean
}
export function Post(props: MyPostsPropsType) {
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
        <div className={styles.itemWrapper}>
                <MyProfilePhoto/>
            <p>
                {props.message}
            </p>
            <div className={styles.likeBlock}>
                {likeObj.updated ? <FavoriteIcon onClick={addLikeHandler}/> : <FavoriteBorderIcon onClick={addLikeHandler}/> } {likeObj.likeCount}
            </div>
        </div>
    );
}