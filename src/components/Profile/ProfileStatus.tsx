import React, {ChangeEvent, useState} from 'react';
import styles from "./Profile.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../Redux/reduxStore";
import {updateUserStatusThunkCreator} from "../../Redux/ProfileReducer";


export const ProfileStatus = React.memo(() => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState<boolean>(true);
    const status = useSelector<AppRootState, string>(state => state.ProfilePage.status);
    const userId = useSelector<AppRootState, number | undefined>(state => state.ProfilePage.profile.userId); //21748
    const [localStatus, setLocalStatus] = useState(status);

    const activateEditMode = () => {
        setLocalStatus(status);
        setEditMode(false);
    }
    const deactivateEditMode = () => {
        dispatch(updateUserStatusThunkCreator(localStatus));
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
    if (editMode && userId !== 21748 ) {
        return (
            <div>
                {status}
            </div>
        )
    }
    if(editMode && userId === 21748 && !status){

        return <div className={styles.editableDiv}
            onClick={activateEditMode}>
            {"Set status"}
        </div>
    }
    if(editMode && userId === 21748){
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
                       autoFocus={true}
                       value={localStatus}/>


});

