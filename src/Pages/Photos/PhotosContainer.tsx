import React from 'react';

import Photos from './Photos';
import styles from './Photos.module.scss';

const PhotosContainer = () => (
  /* const Redirect = WithAuthRedirect(Photos) */
  <div className={styles.content}>
    {/* <Redirect/> */}
    <Photos />
  </div>
);

/* compose<React.ComponentType>(WithAuthRedirect)(PhotosContainer); */
export default PhotosContainer;
