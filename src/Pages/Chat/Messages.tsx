import React, { useEffect, useRef, useState } from 'react';

import { useAppSelector } from '../../store/store';

import { Message } from './Message';
import styles from './Messages.module.scss';

export const Messages = React.memo(() => {
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const messages = useAppSelector(state => state.ChatPage.messages);
  const messagesAnchorRef = useRef<HTMLDivElement>(null);
  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>): void => {
    const element = e.currentTarget;
    if (
      Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 400 &&
      !isAutoScroll
    ) {
      setIsAutoScroll(true);
    } else {
      setIsAutoScroll(false);
    }
  };

  useEffect(() => {
    if (isAutoScroll) {
      messagesAnchorRef.current?.scrollIntoView();
    }
  }, [messages, isAutoScroll]);

  return (
    <div className={styles.messagesBlock} onScroll={scrollHandler}>
      {messages.map(m => (
        <Message message={m} key={m.id} userId={m.userId} />
      ))}
      <div ref={messagesAnchorRef} />
    </div>
  );
});
