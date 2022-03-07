import React, {ChangeEvent, useState} from 'react';
import styles from "./Profile.module.css"


export const ProfileStatus = React.memo(() => {
    const [title, setTitle] = useState<string>("set status");
    const [editMode, setEditMode] = useState<boolean>(true);

    const activateEditMode = () => {
        setEditMode(false);

    }
    const deactivateEditMode = () => {
        setEditMode(true);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === "Enter"){
            deactivateEditMode();
        }
    }
    return editMode
           ? <div className={styles.editableSpan} onDoubleClick={activateEditMode}>{title}</div>

           : <input className={styles.editableSpan}
                    onChange={changeTitle}
                    onKeyPress={onKeyPressHandler }
                    onBlur={deactivateEditMode}
                    type="text"
        autoFocus={true}/>


    ;
});

