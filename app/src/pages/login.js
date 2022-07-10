import React, { useState, useEffect } from "react";
import styles from '../styles/login.module.css';
import Link from 'next/link';
import Item from '../service/item';
import { motion } from 'framer-motion';
import { useRouter } from "next/router";
import axios from 'axios';

const item = new Item(process.env.REACT_APP_ALG_SERVER);


function Login() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const onClickLoginBtn = (e) => {
    e.preventDefault();

    let id = document.querySelector("#uid").value;
    let password = document.querySelector("#upassword").value;

    if (id == "" || password == "") {
      setMessage("아이디와 비밀번호를 모두 입력해주세요.");
    }
    else {
      setMessage("");


      // const login = async () => {
      //   const { login_data } = await axios({
      //     method: 'post',
      //     url: `${process.env.REACT_APP_ALG_SERVER}/user/signin`,
      //     data: {
      //       "userid": id,
      //       "password": password
      //     }
      //   });
      //   console.log(login_data);
      // }
      // login();


      fetch(`${process.env.REACT_APP_ALG_SERVER}/user/signin`, {
        method: "POST",
        // credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "userid": id,
          "password": password
        })
      })
        .then(response => {
          if (response.status == 200) {

            const makeData = async () => {
              const data = await response.json();
              localStorage.setItem('accessToken', data.token.accessToken);
              localStorage.setItem('refreshToken', data.token.refreshToken);
            }
            makeData();

            router.push("/mypage");
          }
          else if (response.status == 401) {
            setMessage("잘못된 아이디 혹은 비밀번호 입니다.");
          }
        })
        .catch((error) => console.log(error.message));
    }
  }

  useEffect(() => {
    // async function fetchData() {
    //   try {
    //     const response = await axios.get(`${process.env.REACT_APP_ALG_SERVER}/users/check`);
    //     if (response.status == 200) {
    //       router.push("/");
    //     }
    //   }
    //   catch (e) {
    //     console.error(e);
    //   }
    // }
    // fetchData();

  }, []);


  return (
    <motion.div
      className={styles.background}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeIn", duration: 0.7 }}
    >

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
        <div className={styles.row_signup}>
          <Link href="/signup">
            <a className={styles.signup_link}>계정이 없으시다면 여기를 클릭해주세요.</a>
          </Link>
        </div>
      </form>

    </motion.div>
  );

}

export default Login;
