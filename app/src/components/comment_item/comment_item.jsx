import React from 'react';
import styles from './comment_item.module.css'

const CommentItem = ({ commentId, comment }) => {
    return (
        <div className={styles.user}>
            <div className={styles.userImg}></div>
            <div className={styles.info}>
                <p className={styles.name}>{comment.nickname}</p>
                <p className={styles.text}>{comment.text}</p>
            </div>
        </div>
    );
};

export default CommentItem;