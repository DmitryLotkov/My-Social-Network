import {addMessageAC, DialogsStateType, updateNewMessageTextAC} from "../../Redux/DialogsReducer";
import {AppRootState} from "../../Redux/reduxStore";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import React from "react";

import {Dialogs} from "../Dialogs/Dialogs";

type MapStateToPropsType = {
    DialogPage: DialogsStateType
    newMessageText: string
}
type MapDispatchToProps = {
    updateNewMessageText: (text: string) => void
    addMessageText: () => void
}

let mapStateToProps = (state:AppRootState): MapStateToPropsType => {
    return {
        DialogPage:state.DialogPage,
        newMessageText: state.DialogPage.newMessageText,
    }
}




let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
    return {
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextAC(text));
        },
        addMessageText: () => {
            dispatch(addMessageAC());
            dispatch(updateNewMessageTextAC(""));
        },
    }
}
export const DialogContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);
