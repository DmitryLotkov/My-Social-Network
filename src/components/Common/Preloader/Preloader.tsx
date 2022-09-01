import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';

import styles from './Preloader.module.scss';

export const Preloader = () => (
  <div className={styles.main}>
    <div className={styles.progress}>
      <CircularProgress size={50} />
    </div>
  </div>
);
