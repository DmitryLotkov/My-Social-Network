import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { placeholderText } from '../../components/Common/TextAreaForm/textAreaData';
import { TextAreaForm } from '../../components/Common/TextAreaForm/TextAreaForm';
import { addMessageAC, DialogsStateType } from '../../store/DialogsReducer';

import { DialogItem } from './DialogItem/DialogItem';
import styles from './Dialogs.module.scss';
import { Message } from './Message/Message';

type DialogsPropsType = {
  DialogPage: DialogsStateType;
};

export const Dialogs = React.memo((props: DialogsPropsType) => {
  const dispatch = useDispatch();
  const messagesElements = props.DialogPage.messages.map(m => (
    <Message key={m.id} message={m.message} />
  ));
  const addMessage = useCallback(
    (text: string) => {
      dispatch(addMessageAC(text));
    },
    [dispatch],
  );

  return (
    <div className={styles.dialogsWrapper}>
      <DialogItem DialogPage={props.DialogPage} />
      {messagesElements}
      <TextAreaForm
        callBack={addMessage}
        placeholderText={placeholderText.dialogsAreaText}
      />
    </div>
  );
});
