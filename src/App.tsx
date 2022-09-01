import React, { FC, useEffect } from 'react';

import './App.scss';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Preloader } from './components/Common/Preloader/Preloader';
import { isInitializedSelector } from './components/Common/Selectors/Selectors';
import { ErrorSnackBar } from './components/ErrorSnackBar/ErrorSnackBar';
import withSuspense from './components/HOC/withSuspense';
import PrivateRoutes from './components/PrivateRoutes';
import { EditProfile } from './Pages/EditProfile/EditProfile';
import { Error404 } from './Pages/Error404/Error404';
import { EventsContainer } from './Pages/Events/EventsContainer';
import { Footer } from './Pages/Footer/Footer';
import { Login } from './Pages/Login/Login';
import PhotosContainer from './Pages/Photos/PhotosContainer';
import { ProfileContainerFC } from './Pages/Profile/ProfileContainerFC';
import UsersContainerFC from './Pages/Users/UsersContainerFC';
import { RequestStatusType } from './store/AppReducer';
import { initializeAppTC } from './store/AuthReducer';
import { useAppSelector } from './store/store';

const SuspendedDialogContainer = React.lazy(
  () => import('./Pages/Dialogs/DialogContainerFC'),
);

export const PATH = {
  HOME: '/',
  LOGIN: '/login',
  PROFILE: '/profile',
  USERS: '/users',
  ERROR404: '/404',
  ANY_ROUTE: '*',
  DIALOGS: '/dialogs',
  EVENTS: '/events',
  PHOTOS: '/photos',
  EDIT_PROFILE: '/edit_profile',
};

const App: FC = () => {
  const appStatus = useAppSelector<RequestStatusType>(state => state.App.status);
  const dispatch = useDispatch();
  const isInitialized = useAppSelector(isInitializedSelector);

  useEffect(() => {
    dispatch(initializeAppTC());
  }, [dispatch]);

  if (!isInitialized) {
    return <Preloader />;
  }
  return (
    <div className="App">
      <main className="mainContent">
        {appStatus === 'loading' && <Preloader />}
        <Routes>
          <Route path={PATH.HOME} element={<Navigate to={`${PATH.PROFILE}`} />} />
          <Route element={<PrivateRoutes />}>
            <Route path={`${PATH.PROFILE}`} element={<ProfileContainerFC />} />
            <Route path={`${PATH.PROFILE}/:userId`} element={<ProfileContainerFC />} />
            <Route
              path={PATH.DIALOGS}
              element={withSuspense(SuspendedDialogContainer)({})}
            />
            <Route path={PATH.USERS} element={<UsersContainerFC />} />
            <Route path={PATH.EDIT_PROFILE} element={<EditProfile />} />
          </Route>
          <Route path={PATH.LOGIN} element={<Login />} />
          <Route path={PATH.EVENTS} element={<EventsContainer />} />
          <Route path={PATH.PHOTOS} element={<PhotosContainer />} />
          <Route path={PATH.ANY_ROUTE} element={<Navigate to={PATH.ERROR404} />} />
          <Route path={`${PATH.ERROR404}`} element={<Error404 />} />
        </Routes>
        <ErrorSnackBar />
      </main>
      <Footer />
    </div>
  );
};

export default App;
