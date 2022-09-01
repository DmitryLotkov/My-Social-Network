import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { AppRootStateType } from '../../store/store';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const WithAuthRedirect = (Component: React.ComponentType<any>) => {
  const isInitialized = useSelector<AppRootStateType, boolean>(
    state => state.Auth.isInitialized,
  );

  return (props: any) => {
    if (!isInitialized) {
      return <Navigate to="/login" />;
    }
    return <Component {...props} />;
  };
};
