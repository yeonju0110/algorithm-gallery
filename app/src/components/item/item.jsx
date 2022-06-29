import React from 'react';
import styles from './item.module.css';
import { useRouter } from 'next/router';

const Item = ({ postId, latestPost }) => {
    const router = useRouter();

    return (
        <div className={styles.box} onClick={() => router.push(`/post/${latestPost.postid}`)}>
                <h5 className={styles.problem}>백준 #{latestPost.tag2}</h5>
                <div className={styles.lang}>{latestPost.tag1}</div>
                <div className={styles.algorithm}>{latestPost.tag3}</div>
        </div>
    );
};

export default Item;