import React from 'react';
import styles from './post_add_container.module.css';

const PostAddContainer = (props) => {
    return (
        <div className={styles.post}>
            <i className={`${styles.cancel} fa-solid fa-times`}></i>
            <div className={styles.box}>
                <section className={styles.left}>
                </section>
                <section className={styles.right}>
                </section>
            </div>
        </div>
    );
}

export default PostAddContainer;