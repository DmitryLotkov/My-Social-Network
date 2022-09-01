import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import defaultUserPhoto from '../../../Images/defaultUserImage.jpg';
import { useAppSelector } from '../../../store/store';
import { myIDSelector } from '../Selectors/Selectors';

import styles from './MyProfilePhoto.module.scss';

export const MyProfilePhoto = React.memo(() => {
  const navigate = useNavigate();
  const myPhoto = useAppSelector<string | undefined>(
    state => state.Auth.myProfile?.photos?.small,
  );
  const myLoginName = useAppSelector<string | undefined>(
    state => state.Auth.myProfile?.fullName,
  );
  const userID = useSelector(myIDSelector);
  const navigateToMyMage = () => navigate(`/profile/${userID}`);

  return (
    <div
      onKeyUp={navigateToMyMage}
      tabIndex={0}
      role="button"
      onClick={navigateToMyMage}
      className={styles.myProfilePhotoWrapper}
    >
      <img
        className={styles.mySmallPhoto}
        src={myPhoto || defaultUserPhoto}
        alt="userPhoto"
      />
      <div>
        <strong>{myLoginName}</strong>
        <div className={styles.jobDescription}>Frontend developer</div>
      </div>
    </div>
  );
});
