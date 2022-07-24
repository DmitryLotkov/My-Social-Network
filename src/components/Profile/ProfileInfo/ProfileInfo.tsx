import React, {ChangeEvent, useRef, useState} from "react";
import styles from "./ProfileInfo.module.scss"
import {
    ProfileDataType, uploadAvatarTC,
} from "../../../store/ProfileReducer";
import defaultUserPhoto from "../../../Images/defaultUserImage.jpg";
import {ProfileStatus} from "../ProfileStatus";
import Modal from "@mui/material/Modal/Modal";
import {Box, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Close} from "@mui/icons-material";
import {useAppSelector} from "../../../store/store";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {setAppErrorAC} from "../../../store/AppReducer";
import {userIDSelector} from "../../Common/Selectors/Selectors";
import {useParams} from "react-router-dom";
import {maxPictureSize} from "../../../constants";
import {ContactBlock} from "../ContactBlock/ContactBlock";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Popover from "@mui/material/Popover";
import {ChatBlock} from "../OnlineFriends/ChatBlock";
import {OnlineFriendType} from "../../OldComponents/OldStore";
import chatStyles from "../OnlineFriends/ChatBlock.module.scss";


type profileInfoPropsType = {
    profile: ProfileDataType

}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: '#F9F9FE',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
}
export const ProfileInfo = React.memo((props: profileInfoPropsType) => {

    const dispatch = useDispatch();
    const userPhoto = useAppSelector(state => state.ProfilePage.profile.photos?.large);
    const userId = Number(useParams<'userId'>().userId)
    const myId = useAppSelector(userIDSelector);
    const photoRef = useRef<HTMLInputElement>(null);
    const onlineFriends = useAppSelector<Array<OnlineFriendType>>(state => state.HardcodedUsers.onlineFriends)

    const [open, setOpen] = useState(false);
    const [base64Avatar, setLocalAvatar] = useState<any>(userPhoto);
    const [fileAvatar, setFileAvatar] = useState<any>();
    const [openPopover, setOpenPopover] = useState(false)
    const popoverAnchor = useRef(null);
    const show = Object.values(props.profile.contacts).every(item => item !== null)

    const handleCloseModal = () => setOpen(false);
    const handleClosePopover = () => setOpenPopover(false);
    const handleOpenPopover = () => setOpenPopover(true);


    const handleSaveAvatar = () => {
        dispatch(uploadAvatarTC(fileAvatar));
        handleCloseModal();
    }
    const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        const file = e.target?.files;

        if ((file && file[0].type) && (file[0].type === "image/png" || file[0].type === "image/jpeg")) {
            setFileAvatar(file[0])
            reader.onloadend = function () {
                setLocalAvatar(reader.result)
            }
            if (file[0].size && file[0].size <= maxPictureSize) {
                reader.readAsDataURL(file[0])
            } else {
                dispatch(setAppErrorAC(`Your file size must be less then ${maxPictureSize / 1000000}MB 😕`))
            }

        } else {
            dispatch(setAppErrorAC(`Your file has not in .png .jpeg format. Please choose the right file`))
        }

    }
    const onlineFriendsArr = onlineFriends.map((f) =>
        <ChatBlock
            key={f.id}
            id={f.id}
            avatar={f.avatar}/>
    )
    return (
        <div className={styles.profileInfoWrapper}>

            <div className={styles.profilePhoto}>
                <div className={styles.avatarWrapper}>
                    <img src={props.profile.photos?.large ?? defaultUserPhoto} alt={"userPhoto"}/>
                    {userId === myId &&
                    <div className={styles.menu} onClick={() => setOpen(true)}><p>Change photo</p></div>}
                </div>
            </div>

            <div className={styles.statusBlock}>
                <div className={styles.profileName}>
                    <strong>{props.profile.fullName}</strong>
                    {/*<img src={smallLogo} alt="smallLogo"/>*/}
                    <CheckCircleOutlineIcon
                        className={styles.popover}
                        ref={popoverAnchor}
                        onClick={handleOpenPopover} fontSize={"small"}
                        color={props.profile.lookingForAJob ? "success" : "error"}/>
                </div>
                <div className={styles.profileStatus}>
                    <ProfileStatus/>
                </div>
                {props.profile.aboutMe && <p className={styles.profileDescription}>
                    {props.profile.aboutMe}
                </p>}
            </div>
            {show && <ContactBlock/>}

            <div className={chatStyles.ChatBlock}>
                <span className={chatStyles.Title}>Chat online</span>
                {onlineFriendsArr}
            </div>
            <Modal open={open}
                   onClose={handleCloseModal}
            >
                <Box sx={style}>
                    <Box>
                        <Box style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: 'center',
                            alignItems: "center", position: "relative"
                        }}><strong>
                            <p style={{fontSize: "20px"}}>Uploading profile photo</p>
                        </strong></Box>
                        <IconButton style={{position: "absolute", top: "5px", right: "10px"}}
                                    onClick={handleCloseModal}>
                            <Close/>
                        </IconButton>
                    </Box>
                    <Box style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignItems: "center"
                    }}>

                        <Box id="outer-container">
                            <img src={base64Avatar || userPhoto} alt="avatar"
                                 width={"200px"} style={{borderRadius: "8px", marginBottom: "10px"}}
                            />
                        </Box>

                        <Box>
                            <label htmlFor="icon-button-file">
                                <input type={"file"} style={{display: "none"}} id={"answer"} ref={photoRef}
                                       accept="image/*" onChange={onChangeAvatar}/>
                                <Button sx={{textTransform: "none"}} variant={"contained"}
                                        onClick={() => photoRef.current && photoRef.current.click()}>Upload
                                    photo</Button>
                                <Button sx={{textTransform: "none"}} variant={"contained"}
                                        onClick={handleSaveAvatar}>Save
                                </Button>
                            </label>
                        </Box>
                        <p>You can upload images in JPG or PNG format</p>
                    </Box>
                </Box>
            </Modal>
            <Popover open={openPopover}
                     anchorEl={popoverAnchor.current}
                     onClose={handleClosePopover}
                     anchorOrigin={{
                         vertical: 'top',
                         horizontal: 'left',
                     }}
                     transformOrigin={{
                         vertical: 'bottom',
                         horizontal: 'right',
                     }}
            >
                <Typography
                    sx={{p: 1}}>{props.profile.lookingForAJob ? "In search of a job" : "Not looking for a job"}</Typography>
            </Popover>
        </div>
    );
})