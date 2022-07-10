import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './header_profile.module.css';
import { useEffect } from 'react';
import axios from 'axios';

const HeaderProfile = (props) => {
    const router = useRouter();

    const [isProfile, setIsProfile] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const clickProfile = () => {
        setIsProfile(!isProfile);
    };

    const goPage = e => {
        if (e.target.innerText === 'logout')
            router.push("/");
        else
            router.push(`/${e.target.innerText}`);
        setIsProfile(!isProfile);
    }

    useEffect(() => {

        if (localStorage.getItem('accessToken') != null) {
            setIsLogin(true);
        }

        // async function fetchData() {
        //     try {
        //         const response = await axios.get(`${process.env.REACT_APP_ALG_SERVER}/users/check`);
        //         if (response.status == true) {
        //             setIsLogin(true);
        //         }
        //     }
        //     catch (e) {
        //         console.error(e);
        //     }
        // }
        // fetchData();

    }, []);

    return (
        <div className={styles.box}>
            <div onClick={clickProfile} className={isLogin ? `${styles.userImg}` : `${styles.basicImg}`}></div>
            <div className={isProfile ? `${styles.btnBox}` : `${styles.noneBox}`}>
                {!isLogin && (
                    <button className={styles.btn} onClick={goPage}>login</button>
                )}
                {!isLogin && (
                    <button className={styles.btn} onClick={goPage}>signup</button>
                )}
                {isLogin && (
                    <button className={styles.btn} onClick={goPage}>mypage</button>
                )}
                {isLogin && (
                    <button className={styles.btn} onClick={() => { localStorage.clear(); }}>logout</button>
                )}
            </div>
        </div>
    );
};

export default HeaderProfile;