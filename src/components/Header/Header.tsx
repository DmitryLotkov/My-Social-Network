import React from 'react';

import styles from './Header.module.scss';
import { Navigation } from './Navigation';

export const Header = () => (
  <header className={styles.headerWrapper}>
    <Navigation />
  </header>
);
