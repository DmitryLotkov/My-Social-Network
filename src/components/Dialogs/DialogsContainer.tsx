import {addMessageAC, DialogsStateType, updateNewMessageTextAC} from "../../Redux/DialogsReducer";
import {AppStateType} from "../../Redux/reduxStore";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    DialogPage: DialogsStateType
    newMessageText: string
}
type MapDispatchToProps = {
    updateNewMessageText: (text: string) => void
    addMessageText: () => void
}

let mapStateToProps = (state:AppStateType): MapStateToPropsType => {
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
