import styles from "./header.module.css";
import { Link } from "react-router-dom";

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
        <div className={styles.userImg}></div>
      </div>
    </div>
  );
}

export default Header;
