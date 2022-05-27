import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './item.module.css';

const Item = ({ postId, latestPost }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.box} onClick={() => navigate(`/p/${latestPost.postid}`)}>
                <h5 className={styles.problem}>백준 #{latestPost.tag2}</h5>
                <div className={styles.lang}>{latestPost.tag1}</div>
                <div className={styles.algorithm}>{latestPost.tag3}</div>
        </div>
    );
};

export default Item;