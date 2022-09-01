import React from 'react';

import { useAppSelector } from '../../../store/store';
import { UsersOnWallType } from '../../../store/UserPostsReducer';

import AnyUserPost from './AnyUserPost';
import styles from './AnyUserPosts.module.scss';

const AnyUserPosts = () => {
  const userInfo = useAppSelector<Array<UsersOnWallType>>(
    state => state.HardcodedUsers.anyUserPostsData,
  );
  const anyPostsElements = userInfo.map(post => (
    <AnyUserPost
      key={post.id}
      postPhoto={post.postPhoto}
      name={post.name}
      id={post.id}
      avatar={post.avatar}
      position={post.position}
      postText={post.postText}
    />
  ));
  return <div className={styles.itemWrapper}>{anyPostsElements}</div>;
};

export default AnyUserPosts;
