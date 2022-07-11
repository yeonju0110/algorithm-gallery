import React, { useEffect, useState } from 'react';
import styles from './like.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'; // ♡
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'; // ♥︎
import { useRouter } from 'next/router';

const Like = ({ onLike }) => {
    const [isChecked, setisChecked] = useState(false);
    const router = useRouter();
    const { id } = router.query;


    const likeUp = () => {
        fetch(`${process.env.REACT_APP_ALG_SERVER}/like/${id}`, {
            method: "POST",
            // credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then((res) => res.json())
            .then((res) => { })
            .catch(error => console.log('error', error));

        setisChecked(!isChecked);


        fetch(`${process.env.REACT_APP_ALG_SERVER}/like/${id}`, {
            // credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(response => response.json())
            .then((res) => {
                if (res.status === false) {
                    onLike(res.count + 1);
                }
                else {
                    onLike(res.count - 1);
                }
            })
            .catch(error => console.log('error', error));

        onLike(isChecked);
    }


    useEffect(() => {
        fetch(`${process.env.REACT_APP_ALG_SERVER}/like/${id}`, {
            // credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(response => response.json())
            .then((res) => {
                if (res.status === false) {
                    setisChecked(false);
                }
                else {
                    setisChecked(true);
                }
                onLike(res.count);
            })
            .catch(error => console.log('error', error));

    }, []);

    return (
        <FontAwesomeIcon
            onClick={likeUp}
            icon={isChecked ? solidHeart : regularHeart}
            className={styles.heart}
        />
    );
};

export default Like;