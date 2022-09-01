import React from 'react';

import { DialogsStateType } from '../../../store/DialogsReducer';
import styles from '../Dialogs.module.scss';

type DialogItemPropsType = {
  DialogPage: DialogsStateType;
};

export const DialogItem: ({
  DialogPage: { dialogs },
}: DialogItemPropsType) => JSX.Element = ({
  DialogPage: { dialogs },
}: DialogItemPropsType): JSX.Element => {
  const dialogItem = dialogs.map(m => (
    <div className={styles.dialogItem} key={m.id}>
      <div className={styles.userAvatarAndName}>
        <img src={m.avatar} alt="friendAvatar" />
        <strong>{m.name}</strong>
        <div className={styles.jobDescription}>Product manager</div>
      </div>
      <div>{m.message}</div>
    </div>
  ));
  return <>{dialogItem}</>;
};
