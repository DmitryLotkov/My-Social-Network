import React from 'react';

import { MyProfilePhoto } from '../../../components/Common/MyProfilePhoto/MyProfilePhoto';
import styles from '../Dialogs.module.scss';

export type MessageType = {
  message: string;
};

export const Message = React.memo((props: MessageType) => (
  <div className={styles.messagesWrapper}>
    <p className={styles.dialogItem}>{props.message}</p>
    <MyProfilePhoto />
  </div>
));
