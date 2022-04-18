import React from "react";
import styles from "./Profile.module.scss"
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {addPostActionAC, PostType, ProfileDataType,} from "../../Redux/ProfileReducer";
import commonStyle from "../Common/boxStyle.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../Redux/reduxStore";
import {MyPosts} from "./MyPosts";
import {myUserID} from "../../Redux/AuthReducer";
import {placeholderText} from "../Common/TextAreaForm/textAreaData";

type ProfilePropsType = {
    userID: number
}

export const ProfileFC = React.memo((props: ProfilePropsType) => {
    const postsData = useSelector<AppRootState, Array<PostType>>(state => state.ProfilePage.postsData);
    const profile = useSelector<AppRootState, ProfileDataType>(state => state.ProfilePage.profile);
    const dispatch = useDispatch();

    const addMessage = (text: string) =>{
        return  dispatch(addPostActionAC(text))
    }
    return (
        <div className={`${styles.wrapper} ${commonStyle.mainBox}`}>
            <ProfileInfo profile={profile}/>
            {props.userID === myUserID && <MyPosts placeholderText={placeholderText.profileAreaText}
                                                   callBack={addMessage}
                                                   postsData={postsData}/>}
        </div>)

})