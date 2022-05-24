import styles from "./header.module.css";



function Header() {
  return (
    <div className={styles.headerBox}>
      <div className={styles.nav__logo}>
        <a href="index.html">
          <div className={styles.agLogoImg}></div>
        </a>
      </div>
      <div className={styles.navKey__container}>
        <a href="" className={styles.navKey}>Algorithms</a>
        <a href="" className={styles.navKey}>Problems</a>
        <a href="" className={styles.navKey}>Community</a>
        <a href="" className={styles.navKey}>Support</a>
        <a href="">
          <div className={styles.userImg}></div>
        </a>
      </div>
    </div>
  );
}

export default Header;
