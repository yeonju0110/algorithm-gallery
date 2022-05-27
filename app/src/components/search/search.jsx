import React from 'react';
import styles from './search.module.css';

const Search = (props) => {
    return (
        <div className={styles.box}>
            <p className={styles.title}># 언어</p>
            <p className={styles.text}>언어</p>
        </div>
    );
};

export default Search;