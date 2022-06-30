import styles from "./header.module.css";
import { Link } from "react-router-dom";
import HeaderProfile from "../header_profile/header_profile";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const goToMyPage = () => {
    fetch(`${process.env.REACT_APP_ALG_SERVER}/users/check`)
      .then((r) => {
        if (r.status == 200) {
          navigate('/mypage');
        }
        else {
          navigate('/');
        }
      });
  }



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
        <HeaderProfile onClick={goToMyPage} />
      </div>
    </div>
  );
}

export default Header;
