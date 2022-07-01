import React, {ChangeEvent, useState} from 'react';
import styles from "./Profile.module.scss";
import {useDispatch} from "react-redux";
import {updateUserStatusTC} from "../../Redux/ProfileReducer";
import {statusSelector, userIDSelector} from "../Common/Selectors/Selectors";
import {myUserID} from "../../Redux/AuthReducer";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../Redux/reduxStore";


export const ProfileStatus = React.memo(() => {
    const dispatch = useDispatch();
    const status = useAppSelector(statusSelector);
    const myUserId = useAppSelector(userIDSelector); //21748
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
            <>
                {status}
            </>
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

