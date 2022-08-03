import React, {ChangeEvent, useState} from 'react';
import styles from "./Profile.module.scss";
import {useDispatch} from "react-redux";
import {updateUserStatusTC} from "../../store/ProfileReducer";
import {myIDSelector, statusSelector} from "../Common/Selectors/Selectors";
import {useAppSelector} from "../../store/store";


export const ProfileStatus = () => {
    const dispatch = useDispatch();
    const status = useAppSelector(statusSelector);
    const [localStatus, setLocalStatus] = useState(status);
    const [editMode, setEditMode] = useState<boolean>(true);
    const userId = useAppSelector(state => state.ProfilePage.profile.userId);
    const myID = useAppSelector(myIDSelector);

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

    if (userId !== myID) {

        return (
            <div data-testid="editableDiv">
                {status}
            </div>
        )
    }

    if (editMode && userId === myID && !status) {

        return (
            <div
                className={styles.editableDiv}
                onClick={activateEditMode}>
                Set status
            </div>
        )
    }

    if ((editMode && userId === myID)) {
        return (
            <div className={styles.editableDiv}
                 data-testid="editableMyDiv"
                 onClick={activateEditMode}>
                 {status}
            </div>)
    } else return <input className={styles.input}
                         onChange={changeTitle}
                         onKeyPress={onKeyPressHandler}
                         onBlur={deactivateEditMode}
                         type="text"
                         data-testid="input"
                         value={localStatus}/>
};

