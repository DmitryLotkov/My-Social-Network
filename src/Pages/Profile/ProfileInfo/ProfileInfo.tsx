import React, { ChangeEvent, useRef, useState } from 'react';

import { Close } from '@mui/icons-material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal/Modal';
import Popover from '@mui/material/Popover';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { myIDSelector } from '../../../components/Common/Selectors/Selectors';
import { maxPictureSize } from '../../../constants';
import defaultUserPhoto from '../../../Images/defaultUserImage.jpg';
import { setAppErrorAC } from '../../../store/AppReducer';
import { ProfileDataType, uploadAvatarTC } from '../../../store/ProfileReducer';
import { useAppSelector } from '../../../store/store';
import { OnlineFriendType } from '../../../store/UserPostsReducer';
import { ContactBlock } from '../ContactBlock/ContactBlock';
import { ChatBlock } from '../OnlineFriends/ChatBlock';
import chatStyles from '../OnlineFriends/ChatBlock.module.scss';
import { ProfileStatus } from '../ProfileStatus';

import styles from './ProfileInfo.module.scss';

type profileInfoPropsType = {
  profile: ProfileDataType | undefined;
};

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
};
export const ProfileInfo = React.memo((props: profileInfoPropsType) => {
  const dispatch = useDispatch();
  const userPhoto = useAppSelector(state => state.ProfilePage.profile.photos?.large);
  const userId = Number(useParams<'userId'>().userId);
  const myId = useAppSelector(myIDSelector);
  const photoRef = useRef<HTMLInputElement>(null);
  const onlineFriends = useAppSelector<Array<OnlineFriendType>>(
    state => state.HardcodedUsers.onlineFriends,
  );
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [base64Avatar, setLocalAvatar] = useState<any>(userPhoto);
  const [fileAvatar, setFileAvatar] = useState<any>();
  const [openPopover, setOpenPopover] = useState(false);
  const popoverAnchor = useRef(null);
  const show =
    props.profile && Object.values(props.profile.contacts).every(item => item !== null);

  const handleCloseModal = () => setOpenModal(false);
  const handleClosePopover = () => setOpenPopover(false);
  const handleOpenPopover = () => setOpenPopover(true);
  const uploadPhoto = () => photoRef.current && photoRef.current.click();
  const handleSaveAvatar = () => {
    dispatch(uploadAvatarTC(fileAvatar));
    handleCloseModal();
  };
  const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = e.target?.files;

    if (
      file &&
      file[0].type &&
      (file[0].type === 'image/png' || file[0].type === 'image/jpeg')
    ) {
      setFileAvatar(file[0]);
      reader.onloadend = () => {
        setLocalAvatar(reader.result);
      };
      if (file[0].size && file[0].size <= maxPictureSize) {
        reader.readAsDataURL(file[0]);
      } else {
        dispatch(
          setAppErrorAC(
            `Your file size must be less then ${maxPictureSize / 1000000}MB 😕`,
          ),
        );
      }
    } else {
      dispatch(
        setAppErrorAC(
          `Your file has not in .png .jpeg format. Please choose the right file`,
        ),
      );
    }
  };
  const menuHandler = () => setOpenModal(true);
  const onlineFriendsArr = onlineFriends.map(f => (
    <ChatBlock key={f.id} avatar={f.avatar} />
  ));
  return (
    <div className={styles.profileInfoWrapper}>
      <div className={styles.profilePhoto}>
        <div
          className={styles.avatarWrapper}
          onMouseOver={() => setOpenMenu(true)}
          onMouseLeave={() => setOpenMenu(false)}
          onFocus={() => undefined}
        >
          {props.profile && (
            <img src={props.profile.photos?.large ?? defaultUserPhoto} alt="userPhoto" />
          )}
          {(userId === myId || Number.isNaN(userId)) && (
            <button
              type="button"
              className={openMenu ? styles.visibleMenu : styles.hiddenMenu}
              onClick={menuHandler}
            >
              <p>Change photo</p>
            </button>
          )}
        </div>
      </div>

      <div className={styles.statusBlock}>
        <div className={styles.profileName}>
          {props.profile && <strong>{props.profile.fullName}</strong>}
          <CheckCircleOutlineIcon
            className={styles.popover}
            ref={popoverAnchor}
            onClick={handleOpenPopover}
            fontSize="small"
            color={props.profile && props.profile.lookingForAJob ? 'success' : 'error'}
          />
        </div>
        <div className={styles.profileStatus}>
          <ProfileStatus />
        </div>
        {props.profile && (
          <p className={styles.profileDescription}>{props.profile.aboutMe}</p>
        )}
      </div>
      {show && <ContactBlock />}

      <div className={chatStyles.ChatBlock}>
        <span className={chatStyles.Title}>Chat online</span>
        {onlineFriendsArr}
      </div>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={style}>
          <Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <strong>
                <p style={{ fontSize: '20px' }}>Uploading profile photo</p>
              </strong>
            </Box>
            <IconButton
              style={{ position: 'absolute', top: '5px', right: '10px' }}
              onClick={handleCloseModal}
            >
              <Close />
            </IconButton>
          </Box>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              /* justifyContent: 'space-between', */
              alignItems: 'center',
            }}
          >
            <Box id="outer-container">
              <img
                src={base64Avatar || userPhoto}
                alt="avatar"
                width="200px"
                style={{ borderRadius: '8px', marginBottom: '10px' }}
              />
            </Box>

            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '200px',
              }}
            >
              <input
                type="file"
                style={{ display: 'none' }}
                id="answer"
                ref={photoRef}
                accept="image/*"
                onChange={onChangeAvatar}
              />
              <Button
                sx={{ textTransform: 'none' }}
                variant="contained"
                onClick={uploadPhoto}
              >
                Upload photo
              </Button>
              <Button
                sx={{ textTransform: 'none' }}
                variant="contained"
                onClick={handleSaveAvatar}
              >
                Save
              </Button>
            </Box>
            <p>You can upload images in JPG or PNG format</p>
          </Box>
        </Box>
      </Modal>
      <Popover
        open={openPopover}
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
        <Typography sx={{ p: 1 }}>
          {props.profile && props.profile.lookingForAJob
            ? 'In search of a job'
            : 'Not looking for a job'}
        </Typography>
      </Popover>
    </div>
  );
});
