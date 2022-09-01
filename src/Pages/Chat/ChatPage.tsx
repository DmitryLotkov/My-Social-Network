import React, { useEffect, useState } from 'react';

import MinimizeIcon from '@mui/icons-material/Minimize';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';

import {
  chatMessageSelector,
  chatStartMessageCountSelector,
  chatStatusSelector,
  myIDSelector,
} from '../../components/Common/Selectors/Selectors';
import { setStartMessagesCountAC, StatusType } from '../../store/chatReducer';
import { useAppSelector } from '../../store/store';

import { Chat } from './Chat';
import styles from './ChatPage.module.scss';

const ChatPage = React.memo(() => {
  const myId = useAppSelector(myIDSelector);
  const messages = useAppSelector(chatMessageSelector).filter(m => m.userId !== myId);
  const status = useAppSelector<StatusType>(chatStatusSelector);
  const startMessagesCount = useAppSelector<number>(chatStartMessageCountSelector);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [startMessagesLength, setStartMessagesLength] = useState<number>(messages.length);
  const newMessagesCount = messages.length - startMessagesCount;
  const dispatch = useDispatch();

  const collapseChat = (): void => {
    setIsChatOpen(!isChatOpen);
    dispatch(setStartMessagesCountAC(messages.length)); // удалим флаг новых сообщений, засинхронизировав стейт по клику на кнопку свенуть
  };

  useEffect(() => {
    if (status === 'ready' && startMessagesLength === 0) {
      setStartMessagesLength(messages.length);
      dispatch(setStartMessagesCountAC(messages.length)); // записать стартовые сообещения в стейт
    }
  }, [status, messages, dispatch]);

  return (
    <div
      className={isChatOpen ? styles.chatPageBlockOpen : styles.chatPageBlockCollapsed}
    >
      <div className={styles.chatTitle}>
        <div>Public chat</div>
        <div
          className={
            newMessagesCount > 0 && !isChatOpen
              ? styles.messageFlag
              : styles.noMessageFlag
          }
        >
          <div>{newMessagesCount}</div>
        </div>
        <IconButton onClick={collapseChat} className={styles.minimizeIcon}>
          <MinimizeIcon />
        </IconButton>
      </div>
      <Chat />
    </div>
  );
});

export default ChatPage;
