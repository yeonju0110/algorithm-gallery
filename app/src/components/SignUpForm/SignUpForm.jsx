import React, { useState, useEffect, useRef } from "react";
import styles from "./SignUpForm.module.css";
import { Link, useNavigate } from 'react-router-dom';

function SignUpForm() {
  const [nickname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  //각 input요소에 따른 메세지
  const [emailMessage, setEmailMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordCheckMessage, setPasswordCheckMessage] = useState("");


  const isNotEmpty = useRef(false);
  const isValidEmail = useRef(false);
  const isNotOverlap = useRef(false);
  const isconFirmedPassword = useRef(false);

  const navigate = useNavigate();


  const onChagneName = (e) => {
    setName(e.currentTarget.value);
    if (e.currentTarget.value == "") {
      setNameMessage("닉네임을 입력해주세요.");
      isNotEmpty.current = true;
    }
    else {
      isNotEmpty.current = false;
    }
  }
  const onChangeEmail = (e) => {
    isValidEmail.current = false;
    isNotOverlap.current = false;
    setEmail(e.currentTarget.value);

    //이메일 유효성 검사
    if (email != "") {
      let f = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
      if (f.test(email)) {
        setEmailMessage("");
        isValidEmail.current = true;
      }
      else {
        setEmailMessage("이메일 형식을 맞춰 작성해주세요.");
      }
    }

  }

  const onChangePassword = (e) => {
    isconFirmedPassword.current = false;

    setPassword(e.currentTarget.value);

    //비밀번호 길이 확인
    if (e.currentTarget.value.length > 20) {
      setPasswordMessage("20자 이내의 비밀번호를 사용하세요.")
    }
    else {
      setPasswordMessage("");
    }
  }

  const onChangeCheckPassword = (e) => {
    isconFirmedPassword.current = false;

    let input = e.currentTarget.value;
    setCheckPassword(input);

    //비밀번호 일치 확인
    if (input == "") {
      setPasswordCheckMessage("");
      isconFirmedPassword.current = false;
    }
    else if (input === password) {
      setPasswordCheckMessage("비밀번호 확인이 완료되었습니다.");
      isconFirmedPassword.current = true;
    }
    else {
      setPasswordCheckMessage("비밀번호가 일치하지 않습니다.");
      isconFirmedPassword.current = false;
    }
  }


  const onClickOverLapBtn = (e) => {
    e.preventDefault();

    if (email == "" || !(isValidEmail.current)) {
      setEmailMessage('유효한 이메일을 입력해 주세요.');
    }
    else {
      fetch(`${process.env.REACT_APP_ALG_SERVER}/users/overlap?userid=${email}`)
        .then(response => response.json())
        .then((res) => {
          console.log(res);
          if (res.result == 'FAIL') {
            setEmailMessage('중복된 이메일 입니다.');
            isNotOverlap.current = false;
          }
          else {
            setEmailMessage('사용 가능한 이메일 입니다.');
            isNotOverlap.current = true;
          }
        }
        )
        .catch(error => console.log('error', error));
    }

  }
  const onClickSubmitBtn = (e) => {
    e.preventDefault();

    if (isNotEmpty.current && isNotOverlap.current && isValidEmail.current && isconFirmedPassword.current) {
      fetch(`${process.env.REACT_APP_ALG_SERVER}/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "userid": email,
          "password": password,
          "nickname": nickname
        })
      }).then((res) => {
        if (res.status == 200) {
          alert('회원가입 성공 !');
          navigate('/mypage');
        }
      });
    }
  }


  useEffect(() => { // 로그인되있는 상태면 메인페이지로

    fetch(`${process.env.REACT_APP_ALG_SERVER}/users/check`)
      .then((r) => {
        if (r.status == 200) {
          navigate('/');
        }
      });

  }, []);

  return (<div className={styles.background}>
    <form action="" method="post" className={styles.form} >

      <div className={styles.title}>회원가입</div>
      <div className={styles.row}>
        <label htmlFor="input-name" className={styles.label}>프로필이름</label>
        <input type="text" id="input-name" className={styles.input} onChange={onChagneName} ></input>
        <div className={styles.message}>{nameMessage}</div>
      </div>

      <div className={styles.row}>
        <label htmlFor="input-id" className={styles.label}>이메일</label>
        <input type="text" id="input-id" autoComplete="username" className={`${styles.smallarea} ${styles.input}`} onChange={onChangeEmail} />
        <button className={styles.btn_overlap} onClick={onClickOverLapBtn}>중복확인</button>
        <div className={styles.message}>{emailMessage}</div>

      </div>

      <div className={styles.row}>
        <label htmlFor="input-psw" className={styles.label}>비밀번호</label>
        <input type="password" id="input-psw" className={styles.input} autoComplete="new-password" onChange={onChangePassword} />
        <div className={styles.message}>{passwordMessage}</div>
      </div>

      <div className={styles.row}>
        <label htmlFor="input-psw-check" className={styles.label}>비밀번호 확인</label>
        <input type="password" id="input-psw-check" className={styles.input} autoComplete="new-password" onChange={onChangeCheckPassword} />
        <div className={styles.message}>{passwordCheckMessage}</div>
      </div>

      <div className={styles.row_signup}>
        <button className={styles.btn_signup} onClick={onClickSubmitBtn}>Sign Up</button>
      </div>

      <div className={styles.row_login}><Link to="/login" className={styles.login_link}>이미 계정이 있으시다면 여기를 클릭해주세요.</Link></div>
    </form >
  </div>
  );
}

export default SignUpForm;
