import React, { FC, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { TextAreaForm } from '../../components/Common/TextAreaForm/TextAreaForm';
import {
  sendMessageTC,
  startMessagesListeningTC,
  StatusType,
  stopMessagesListeningTC,
} from '../../store/chatReducer';
import { useAppSelector } from '../../store/store';

import { Messages } from './Messages';

export const Chat: FC = React.memo(() => {
  const status = useAppSelector<StatusType>(state => state.ChatPage.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startMessagesListeningTC());
    return () => {
      dispatch(stopMessagesListeningTC());
    };
  }, [dispatch]);

  const sendMessageHandler = (message: string): (() => Promise<void>) =>
    dispatch(sendMessageTC(message));

  return (
    <div>
      {status === 'error' && <div>Some error occurred. Please refresh the gage</div>}
      <>
        <Messages />
        <TextAreaForm
          webSocketStatusDisabled={status !== 'ready'}
          placeholderText="Press Ctrl + Enter to send message"
          callBack={sendMessageHandler}
        />
      </>
    </div>
  );
});
