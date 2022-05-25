import React, { useState } from "react";
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';


function LoginForm() {
  const [message, setMessage] = useState("");

  const onClickLoginBtn = (e) => {
    e.preventDefault();

    let id = document.querySelector("#uid").value;
    let password = document.querySelector("#upassword").value;

    if (id == "" || password == "") {
      setMessage("아이디와 비밀번호를 모두 입력해주세요.");
    }
    else {
      setMessage("");

      fetch(`${process.env.REACT_APP_ALG_SERVER}/users/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "userid": id,
          "password": password
        })
      })
        .then(response => {
          console.log(response);
          if (response.status == 200) {
            alert("로그인 성공");

          }
          else if (response.status == 401) {
            setMessage("잘못된 아이디 혹은 비밀번호 입니다.");
          }
        })
        .catch((error) => console.log(error.message));
    }
  }

  return (
    <div className={styles.background}>

      <form method="post" className={styles.form}>
        <div className={styles.title}>로그인</div>
        <div>
          <label className={styles.label}>아이디</label>
          <input id="uid" type="text" className={styles.input} required />
        </div>
        <div>
          <label className={styles.label}>비밀번호</label>
          <input id="upassword" type="password" className={styles.input} required />
        </div>

        <div className={styles.message}>{message}</div>
        <div className={styles.row_login}>
          <input type="submit" value="로그인하기" className={styles.btn_login} onClick={onClickLoginBtn} />
        </div>
        <div className={styles.row_signup}><Link to="/signup" className={styles.signup_link}>계정이 없으시다면 여기를 클릭해주세요.</Link></div>
      </form>

    </div>
  );

}

export default LoginForm;