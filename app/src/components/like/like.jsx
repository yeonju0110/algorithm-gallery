import React, { useState } from 'react';
import styles from './like.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'; // ♡
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'; // ♥︎

const Like = ({onLike}) => {
    const [isChecked, setisChecked] = useState(false);

    const likeUp = () => {
        setisChecked(!isChecked);
        onLike(isChecked);
    }

    return(
        <FontAwesomeIcon
            onClick={likeUp}
            icon={isChecked ? solidHeart : regularHeart}
            className={styles.heart}
        />
    );
};

export default Like;