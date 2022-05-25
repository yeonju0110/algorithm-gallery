import React from 'react';
import { Link } from 'react-router-dom';
import styles from './item.module.css';

const Item = ({ postId, latestPost }) => {
    return (
        <div className={styles.box}>
            <Link to={`/post/${latestPost.postid}`} style={{ textDecoration: 'none', color: '#0056FF' }}>
                <h5 className={styles.problem}>백준 #{latestPost.tag2}</h5>
                <div className={styles.lang}>{latestPost.tag1}</div>
                <div className={styles.algorithm}>{latestPost.tag3}</div>
            </Link>
        </div>
    );
};

export default Item;