import React from "react";
import styles from "./Profile.module.scss"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {useDispatch} from "react-redux";
import {MyPosts} from "./MyPosts";

import {useAppSelector} from "../../store/store";
import AnyUserPosts from "./AnyUserPosts/AnyUserPosts";
import {addPostActionAC} from "../../store/UserPostsReducer";
import ChatPage from "../../Pages/Chat/ChatPage";
import {placeholderText} from "../../components/Common/TextAreaForm/textAreaData";


export const ProfileFC = React.memo(() => {
    const postsData = useAppSelector(state => state.HardcodedUsers.myPostsData);
    const profile = useAppSelector(state => state.ProfilePage.profile);
    const dispatch = useDispatch();
    const addMessage = (text: string) => dispatch(addPostActionAC(text));

    return (
        <div className={styles.profileWrapper}>

            <ProfileInfo profile={profile}/>

            <div className={styles.allPostsBlock}>
                <MyPosts
                    placeholderText={placeholderText.profileAreaText}
                    callBack={addMessage}
                    postsData={postsData}/>
                <AnyUserPosts/>
                <ChatPage/>
            </div>

        </div>
    )

})