import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/reduxStore";
import {Dialogs} from "./Dialogs";

import {DialogsStateType} from "../../Redux/DialogsReducer";



const DialogContainerFC: FC = () => {

    const dialogPage = useSelector<AppRootStateType, DialogsStateType>(state => state.DialogPage);

    // const Redirect = WithAuthRedirect(Dialogs);
    return (
            /*<Redirect DialogPage={dialogPage}/>*/
        <Dialogs DialogPage={dialogPage}/>

    );
};
/*compose<React.ComponentType>(
    WithAuthRedirect
)(DialogContainerFC);*/
export default DialogContainerFC