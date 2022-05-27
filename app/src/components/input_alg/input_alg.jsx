import React from 'react';
import styles from './input_alg.module.css';

const InputAlg = (props) => {
    return(
        <div className={styles.box}>
            <div className={styles.alg}># </div>
            <input type="text" placeholder="알고리즘을 설명할 태그를 입력하세요." className={styles.inputBox}/>
        </div>
    );
};

export default InputAlg;