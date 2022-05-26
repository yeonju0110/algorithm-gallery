import styles from "./header.module.css";
import { Link } from "react-router-dom";
import HeaderProfile from "../header_profile/header_profile";

function Header() {
  return (
    <div className={styles.headerBox}>
      <div className={styles.nav__logo}>
        <Link to='/'>
          <div className={styles.agLogoImg}></div>
        </Link>
      </div>
      <div className={styles.navKey__container}>
        <Link to='/' className={styles.navKey}>Algorithms</Link>
        <Link to='/' className={styles.navKey}>Problems</Link>
        <Link to='/' className={styles.navKey}>Community</Link>
        <Link to='/' className={styles.navKey}>Support</Link>
        <HeaderProfile />
      </div>
    </div>
  );
}

export default Header;
