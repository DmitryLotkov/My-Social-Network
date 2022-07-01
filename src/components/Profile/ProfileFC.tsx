import React from "react";
import styles from "./Profile.module.scss"
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {addPostActionAC} from "../../Redux/ProfileReducer";
import commonStyle from "../Common/boxStyle.module.scss"
import {useDispatch} from "react-redux";
import {MyPosts} from "./MyPosts";
import {myUserID} from "../../Redux/AuthReducer";
import {placeholderText} from "../Common/TextAreaForm/textAreaData";
import {postsDataSelector, profileSelector} from "../Common/Selectors/Selectors";
import {useAppSelector} from "../../Redux/reduxStore";

type ProfilePropsType = {
    userID: number| null
}

export const ProfileFC = React.memo((props: ProfilePropsType) => {
    const postsData = useAppSelector(postsDataSelector);
    const profile = useAppSelector(profileSelector);
    const dispatch = useDispatch();

    const addMessage = (text: string) =>{
        return  dispatch(addPostActionAC(text));
    }
    return (
        <div className={`${styles.wrapper} ${commonStyle.mainBox}`}>
            <ProfileInfo profile={profile}/>
            {props.userID === myUserID && <MyPosts placeholderText={placeholderText.profileAreaText}
                                                   callBack={addMessage}
                                                   postsData={postsData}/>}
        </div>)

})