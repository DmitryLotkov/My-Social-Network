import React, { ChangeEvent, useState } from 'react';

import { useDispatch } from 'react-redux';

import {
  myIDSelector,
  statusSelector,
} from '../../components/Common/Selectors/Selectors';
import { updateUserStatusTC } from '../../store/ProfileReducer';
import { useAppSelector } from '../../store/store';

import styles from './Profile.module.scss';

export const ProfileStatus = () => {
  const dispatch = useDispatch();
  const status = useAppSelector(statusSelector);
  const [localStatus, setLocalStatus] = useState(status);
  const [editMode, setEditMode] = useState<boolean>(true);
  const userId = useAppSelector(state => state.ProfilePage.profile.userId);
  const myID = useAppSelector(myIDSelector);

  const activateEditMode = () => {
    setLocalStatus(status);
    setEditMode(false);
  };
  const deactivateEditMode = () => {
    dispatch(updateUserStatusTC(localStatus));
    setEditMode(true);
  };
  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalStatus(e.currentTarget.value);
  };
  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      deactivateEditMode();
    }
  };

  if (userId !== myID) {
    return <div data-testid="editableDiv">{status}</div>;
  }

  if (editMode && userId === myID && !status) {
    return (
      <div
        onKeyDown={activateEditMode}
        tabIndex={0}
        role="button"
        className={styles.editableDiv}
        onClick={activateEditMode}
      >
        Set status
      </div>
    );
  }

  if (editMode && userId === myID) {
    return (
      <div
        tabIndex={0}
        role="button"
        className={styles.editableDiv}
        data-testid="editableMyDiv"
        onClick={activateEditMode}
        onKeyDown={activateEditMode}
      >
        {status}
      </div>
    );
  }
  return (
    <input
      className={styles.input}
      onChange={changeTitle}
      onKeyPress={onKeyPressHandler}
      onBlur={deactivateEditMode}
      type="text"
      data-testid="input"
      value={localStatus}
    />
  );
};
