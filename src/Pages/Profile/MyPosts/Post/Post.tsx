import React, { useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';

import { MyProfilePhoto } from '../../../../components/Common/MyProfilePhoto/MyProfilePhoto';
import { deleteMyPostAC } from '../../../../store/UserPostsReducer';

import styles from './Post.module.scss';

export const maxLikesCount = 300;
type MyPostsPropsType = {
  id: string;
  message: string;
};
export type LikeObjType = {
  likeCount: number;
  updated: boolean;
};

export const Post = ({ id, message }: MyPostsPropsType) => {
  const [likeObj, setLikeObj] = useState<LikeObjType>({ likeCount: 5, updated: false });
  const dispatch = useDispatch();
  const deletePost = (userId: string) => {
    dispatch(deleteMyPostAC(userId));
  };
  const generateLike = () => {
    const likeGenerator = Math.round(Math.random() * maxLikesCount);
    setLikeObj({ likeCount: likeGenerator, updated: false });
  };
  const addLikeHandler = () => {
    if (!likeObj.updated) {
      setLikeObj({ likeCount: likeObj.likeCount + 1, updated: true });
    } else {
      setLikeObj({ likeCount: likeObj.likeCount - 1, updated: false });
    }
  };
  useEffect(() => {
    generateLike();
  }, []);

  return (
    <div className={styles.itemWrapper}>
      <div className={styles.avatarAndClose}>
        <MyProfilePhoto />
        <IconButton style={{ height: '40px' }} onClick={() => deletePost(id)}>
          <CloseIcon />
        </IconButton>
      </div>
      <p>{message}</p>
      <div className={styles.likeBlock}>
        {likeObj.updated ? (
          <FavoriteIcon onClick={addLikeHandler} />
        ) : (
          <FavoriteBorderIcon onClick={addLikeHandler} />
        )}{' '}
        {likeObj.likeCount}
      </div>
    </div>
  );
};
