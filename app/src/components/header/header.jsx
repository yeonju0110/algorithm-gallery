import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';
// import { Link } from "react-router-dom";
import HeaderProfile from '../header_profile/header_profile';

function Header() {
  return (
    <div className={styles.headerBox}>
      <div className={styles.nav__logo}>
        <Link href="/">
          <a>
            <div className={styles.agLogoImg}></div>
          </a>
        </Link>
      </div>
      <div className={styles.navKey__container}>
        <Link href="/">
          <a className={styles.navKey}>Algorithms</a>
        </Link>
        <Link href="/">
          <a className={styles.navKey}>Problems</a>
        </Link>
        <Link href="/">
          <a className={styles.navKey}>Community</a>
        </Link>
        <Link href="/">
          <a className={styles.navKey}>Support</a>
        </Link>
        <HeaderProfile />
      </div>
    </div>
  );
}

export default Header;
