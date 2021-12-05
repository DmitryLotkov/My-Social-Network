import React from "react";

import {addMessageAC, updateNewMessageTextAC} from "../../Redux/DialogsReducer";
import {AppStoreType} from "../../Redux/reduxStore";
import {Dialogs} from "./Dialogs";

type DialogsContainerPropsType = {
    store: AppStoreType
}

export function DialogsContainer(props: DialogsContainerPropsType) {
    let state = props.store.getState()

    let dialogsPostOnchange = (text: string) => {
        props.store.dispatch(updateNewMessageTextAC(text))

    }
    let addNewMessageText = () => {
            props.store.dispatch(addMessageAC());
            props.store.dispatch(updateNewMessageTextAC(""));
    }


    return (
        <Dialogs DialogPage={state.DialogPage}
                 newMessageText={state.DialogPage.newMessageText}
                 updateNewMessageText={dialogsPostOnchange}
                 addMessageText={addNewMessageText}/>
    );
}
