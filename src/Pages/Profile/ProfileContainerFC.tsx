import React, { FC, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import { PATH } from '../../App';
import { isLoggedInSelector } from '../../components/Common/Selectors/Selectors';
import { getProfileTC, getUserStatusTC } from '../../store/ProfileReducer';
import { useAppSelector } from '../../store/store';

import { ProfileFC } from './ProfileFC';

export const ProfileContainerFC: FC = React.memo(() => {
  const dispatch = useDispatch();
  let userId = Number(useParams<'userId'>().userId); // эта id взялась из компоненты app из роута <Route path={"/profile/:userId"}
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const myUserID = useAppSelector(state => state.Auth.data.id);
  if (Number.isNaN(userId)) {
    userId = myUserID;
  }

  useEffect(() => {
    if (userId) {
      dispatch(getProfileTC(userId));
      dispatch(getUserStatusTC(userId));
    }
  }, [userId, dispatch]);

  if (!isLoggedIn) {
    return <Navigate to={PATH.LOGIN} />;
  }
  return <ProfileFC />;
});
