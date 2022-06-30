import React, { useEffect, useRef, useState } from 'react';
import styles from './input_alg.module.css';

const InputAlg = (props) => {
    const [tag3, setTag3] = useState('');

    const tag3Input = useRef();

    const tagChangeHandler = (e) => {
        setTag3(e.currentTarget.value);
    }

    useEffect(() => {
        props.hiTag3(tag3);
    }, [tag3]);

    return(
        <div className={styles.box}>
            <div className={styles.alg}># </div>
            <input
                ref={tag3Input}
                type="text"
                placeholder="알고리즘을 설명할 태그를 입력하세요."
                className={styles.inputBox}
                onChange={tagChangeHandler}
            />
        </div>
    );
};

export default InputAlg;