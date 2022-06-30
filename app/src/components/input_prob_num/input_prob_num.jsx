import React, { useEffect, useRef, useState } from 'react';
import styles from './input_prob_num.module.css';

const InputProbNum = (props) => {
    const [tag2, setTag2] = useState('');

    const tag2Input = useRef();

    const tagChangeHandler = (e) => {
        setTag2(e.currentTarget.value);
    };

    useEffect(() => {
        props.hiTag2(tag2);
    }, [tag2]);

    return(
        <div className={styles.box}>
            <div className={styles.probNum}># </div>
            <input
                ref={tag2Input}
                type="text"
                placeholder="문제번호를 입력하세요."
                className={styles.inputBox}
                onChange={tagChangeHandler}
            />
        </div>
    );
};

export default InputProbNum;