import React, { useState, useEffect } from "react";
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import Item from '../../service/item';

const item = new Item(process.env.REACT_APP_ALG_SERVER);

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

  //로그인 되어있는지 확인

  const [status, setStatus] = useState();

  const isLogined = async () => {//얘가 지금 프로미스를 반환하는데.. 프로미스를 그냥 값으로 못바꿀까? 
    let res = await fetch(`${process.env.REACT_APP_ALG_SERVER}/users/check`)
      .then((r) => {
        setStatus(r.status);
      });
  }


  useEffect(() => {
    isLogined();
  }, []);


  if (status == 200) {
    window.location.href = "/";//리액트에서.. 이거 써도 되겠찌? 모 다른거 있는거 아니겠지???
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
