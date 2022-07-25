import React from "react";
import styles from "./Profile.module.scss"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {useDispatch} from "react-redux";
import {MyPosts} from "./MyPosts";
import {placeholderText} from "../Common/TextAreaForm/textAreaData";
import {useAppSelector} from "../../store/store";
import AnyUserPosts from "./AnyUserPosts/AnyUserPosts";
import {addPostActionAC} from "../../store/UserPostsReducer";

type ProfilePropsType = {
    userID: number | null
}

export const ProfileFC = React.memo((props: ProfilePropsType) => {
    const postsData = useAppSelector(state => state.HardcodedUsers.myPostsData);
    const myProfile = useAppSelector(state => state.Auth.myProfile);
    const dispatch = useDispatch();
    const addMessage = (text: string) => dispatch(addPostActionAC(text));

    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo profile={myProfile}/>

            <div className={styles.allPostsBlock}>
                <MyPosts
                    placeholderText={placeholderText.profileAreaText}
                    callBack={addMessage}
                    postsData={postsData}/>
                <AnyUserPosts/>
            </div>
        </div>
    )

})