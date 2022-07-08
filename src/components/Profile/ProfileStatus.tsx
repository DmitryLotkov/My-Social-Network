import React, {ChangeEvent, useState} from 'react';
import styles from "./Profile.module.scss";
import {useDispatch} from "react-redux";
import {updateUserStatusTC} from "../../Redux/ProfileReducer";
import {statusSelector} from "../Common/Selectors/Selectors";
import {myUserID} from "../../Redux/AuthReducer";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../Redux/store";


export const ProfileStatus = () => {
    const dispatch = useDispatch();
    const status = useAppSelector(statusSelector);
    const userId = Number(useParams<'userId'>().userId)
    const [localStatus, setLocalStatus] = useState(status);
    const [editMode, setEditMode] = useState<boolean>(true);


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
            <div data-testid="editableDiv">
                {status}
            </div>
        )
    }
    if(editMode && userId === myUserID && !status){

        return (
        <div
                className={styles.editableDiv}
                onClick={activateEditMode}>
                Set status
        </div>
        )
    }
    if(editMode && userId === myUserID){
        return (
        <div className={styles.editableDiv}
             data-testid="editableMyDiv"
            onClick={activateEditMode}>
            {status}
        </div>)
    }

    else return <input className={styles.input}
                       onChange={changeTitle}
                       onKeyPress={onKeyPressHandler}
                       onBlur={deactivateEditMode}
                       type="text"
                       data-testid="input"
                       value={localStatus}/>
};

