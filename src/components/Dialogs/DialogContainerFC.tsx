import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../Redux/reduxStore";
import {DialogPageType} from "../OldComponents/OldStore";
import {Dialogs} from "./Dialogs";
import {addMessageAC, updateNewMessageTextAC} from "../../Redux/DialogsReducer";
import {WithAuthRedirect} from "../HOC/withAuthRedirect";


const DialogContainerFC: FC = () => {

    const dispatch = useDispatch();
    const dialogPage = useSelector<AppRootState, DialogPageType>(state => state.DialogPage);
    const newMessageText = useSelector<AppRootState, string>(state => state.DialogPage.newMessageText);
    const updateNewMessageText = (text: string) => {
        dispatch(updateNewMessageTextAC(text));
    }
    const addMessageText = () => {
        dispatch(addMessageAC());
        dispatch(updateNewMessageTextAC(""));
    }
    const Redirect = WithAuthRedirect(Dialogs)
    return (
            <Redirect newMessageText={newMessageText}
                      DialogPage={dialogPage}
                      updateNewMessageText={updateNewMessageText}
                      addMessageText={addMessageText}/>
    );
};
/*compose<React.ComponentType>(
    WithAuthRedirect
)(DialogContainerFC);*/
export default DialogContainerFC