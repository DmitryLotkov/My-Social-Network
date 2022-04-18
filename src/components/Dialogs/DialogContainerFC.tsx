import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {AppRootState} from "../../Redux/reduxStore";
import {Dialogs} from "./Dialogs";
import {WithAuthRedirect} from "../HOC/withAuthRedirect";
import {DialogsStateType} from "../../Redux/DialogsReducer";



const DialogContainerFC: FC = () => {

    const dialogPage = useSelector<AppRootState, DialogsStateType>(state => state.DialogPage);

    const Redirect = WithAuthRedirect(Dialogs)
    return (
            <Redirect DialogPage={dialogPage}/>
    );
};
/*compose<React.ComponentType>(
    WithAuthRedirect
)(DialogContainerFC);*/
export default DialogContainerFC