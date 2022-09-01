import React from 'react';

import chatStyles from './ChatBlock.module.scss';

type OnlineFriendType = {
  avatar: string;
};
export const ChatBlock = ({ avatar }: OnlineFriendType) => (
  <div className={chatStyles.onlineFriendsWrapper}>
    <img className={chatStyles.imgProfilePhoto} src={avatar} alt="onlineFriendAvatar" />
    <span className={chatStyles.OnlineDot} />
  </div>
);
