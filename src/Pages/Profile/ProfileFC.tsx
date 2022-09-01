import React from 'react';

import { useDispatch } from 'react-redux';

import { placeholderText } from '../../components/Common/TextAreaForm/textAreaData';
import { useAppSelector } from '../../store/store';
import { addPostActionAC } from '../../store/UserPostsReducer';
import ChatPage from '../Chat/ChatPage';

import AnyUserPosts from './AnyUserPosts/AnyUserPosts';
import { MyPosts } from './MyPosts';
import styles from './Profile.module.scss';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const ProfileFC = React.memo(() => {
  const postsData = useAppSelector(state => state.HardcodedUsers.myPostsData);
  const profile = useAppSelector(state => state.ProfilePage.profile);
  const dispatch = useDispatch();
  const addMessage = (text: string) => dispatch(addPostActionAC(text));

  return (
    <div className={styles.profileWrapper}>
      <ProfileInfo profile={profile} />

      <div className={styles.allPostsBlock}>
        <MyPosts
          placeholderText={placeholderText.profileAreaText}
          callBack={addMessage}
          postsData={postsData}
        />
        <AnyUserPosts />
        <ChatPage />
      </div>
    </div>
  );
});
