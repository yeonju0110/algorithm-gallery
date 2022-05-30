import React, { useState, useEffect } from "react";
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import Item from '../../service/item';
import { useNavigate } from "react-router-dom";

const item = new Item(process.env.REACT_APP_ALG_SERVER);


function LoginForm() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

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
        credentials: "include",
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
            navigate("/mypage");
            console.log(document.cookie);

          }
          else if (response.status == 400) {
            setMessage("잘못된 아이디 혹은 비밀번호 입니다.");
          }
        })
        .catch((error) => console.log(error.message));
    }
  }

  useEffect(() => { // 로그인되있는 상태면 메인페이지로

    fetch(`${process.env.REACT_APP_ALG_SERVER}/users/check`, {
      credentials: "include"
    })
      .then((r) => {
        if (r.status == 200) {
          navigate("/");
        }
      });

  }, []);


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
