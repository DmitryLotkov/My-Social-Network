import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { DialogsStateType } from '../../store/DialogsReducer';
import { AppRootStateType } from '../../store/store';

import { Dialogs } from './Dialogs';

const DialogContainerFC: FC = () => {
  const dialogPage = useSelector<AppRootStateType, DialogsStateType>(
    state => state.DialogPage,
  );

  // const Redirect = WithAuthRedirect(Dialogs);
  return (
    /* <Redirect DialogPage={dialogPage}/> */
    <Dialogs DialogPage={dialogPage} />
  );
};
/* compose<React.ComponentType>(
    WithAuthRedirect
)(DialogContainerFC); */
export default DialogContainerFC;
