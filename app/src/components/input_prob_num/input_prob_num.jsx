import React from 'react';
import styles from './input_prob_num.module.css';

const InputProbNum = (props) => {
    return(
        <div className={styles.box}>
            <div className={styles.probNum}># </div>
            <input type="text" placeholder="문제번호를 입력하세요." className={styles.inputBox}/>
        </div>
    );
};

export default InputProbNum;