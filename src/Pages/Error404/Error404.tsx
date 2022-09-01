import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { PATH } from '../../App';
import errorText from '../../Images/404Text.svg';
import astronaut from '../../Images/astronaut.svg';
import earth from '../../Images/earth.svg';
import moon from '../../Images/moon.svg';
import rocket from '../../Images/rocket.svg';

import styles from './Error404.module.scss';

export const Error404: FC = () => (
  <div className={styles.ErrorWrapper}>
    <div className={styles.stars}>
      <div className={styles.centralBody}>
        <img className={styles.image404} src={errorText} alt="img404" />
        <NavLink to={`${PATH.HOME}`} className={styles.btnGoHome}>
          GO BACK HOME
        </NavLink>
      </div>
      <div className={styles.objects}>
        <img className={styles.objectRocket} src={rocket} alt="imgRocket" />
        <div className={styles.earthMoon}>
          <img className={styles.objectEarth} src={earth} alt="imgEarth" />
          <img className={styles.objectMoon} src={moon} alt="imgMoon" />
        </div>
        <div className={styles.boxAstronaut}>
          <img className={styles.objectAstronaut} src={astronaut} alt="imgAstronaut" />
        </div>
      </div>
      <div className={styles.glowingStars}>
        <div className={styles.star} />
        <div className={styles.star} />
        <div className={styles.star} />
        <div className={styles.star} />
        <div className={styles.star} />
        <div className={styles.star} />
      </div>
    </div>
  </div>
);
