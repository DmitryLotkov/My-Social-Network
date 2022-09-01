import React, { FC } from 'react';

import { useLocation } from 'react-router-dom';

import styles from './Footer.module.scss';

export const Footer: FC = () => {
  const year = new Date().getFullYear();
  const location = useLocation();

  const myPortfolioRoute = 'https://dmitrylotkov.github.io/Portfolio/';
  return (
    <footer
      className={
        location.pathname !== '/404'
          ? styles.LastContactContainer
          : styles.error404Display
      }
    >
      <span>
        © {year} All Rights Reserved. Created for educational purposes by
        <a href={myPortfolioRoute}>
          <strong> @Dmitry Lotkov</strong>
        </a>
      </span>
    </footer>
  );
};
