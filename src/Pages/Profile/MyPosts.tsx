import React from 'react';

import { TextAreaForm } from '../../components/Common/TextAreaForm/TextAreaForm';
import { PostType } from '../../store/ProfileReducer';

import styles from './MyPosts.module.scss';
import { Post } from './MyPosts/Post/Post';

export type MyPostsPropsType = {
  postsData?: Array<PostType>;
  callBack: (text: string) => void;
  placeholderText: string;
};

export const MyPosts = React.memo((props: MyPostsPropsType) => {
  const postsElements = props.postsData
    ?.map(p => <Post key={p.id} id={p.id} message={p.message} />)
    .reverse();
  return (
    <div className={styles.postBlock}>
      <div className={styles.myPostForm}>
        <h5 className={styles.newPostHeader}>NEW POST</h5>
        <TextAreaForm placeholderText={props.placeholderText} callBack={props.callBack} />
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
});
