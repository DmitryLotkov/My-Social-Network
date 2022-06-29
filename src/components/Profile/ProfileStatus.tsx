import React, {ChangeEvent, useState} from 'react';
import styles from "./Profile.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {updateUserStatusTC} from "../../Redux/ProfileReducer";
import {statusSelector, userIDSelector} from "../Common/Selectors/Selectors";
import {myUserID} from "../../Redux/AuthReducer";

import {useParams} from "react-router-dom";


export const ProfileStatus = React.memo(() => {

    const userId = Number(useParams<'userId'>().userId)
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState<boolean>(true);
    const status = useSelector(statusSelector);
    const myUserId = useSelector(userIDSelector); //21748
    const [localStatus, setLocalStatus] = useState(status);

    const activateEditMode = () => {
        setLocalStatus(status);
        setEditMode(false);
    }
    const deactivateEditMode = () => {
        dispatch(updateUserStatusTC(localStatus));
        setEditMode(true);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value);
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            deactivateEditMode();
        }
    }

    if ( userId !== myUserID ) {

        return (
            <div>
                {status}
            </div>
        )
    }
    if(editMode && myUserId === myUserID && !status){

        return <div className={styles.editableDiv}
            onClick={activateEditMode}>
            {"Set status"}
        </div>
    }
    if(editMode && myUserId === myUserID){
        return <div className={styles.editableDiv}
                    onClick={activateEditMode}>
            {status}
        </div>
    }

    else return <input className={styles.input}
                       onChange={changeTitle}
                       onKeyPress={onKeyPressHandler}
                       onBlur={deactivateEditMode}
                       type="text"
                       value={localStatus}/>


});

