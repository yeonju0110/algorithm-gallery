import React, { useRef } from 'react';
import styles from './comment_input.module.css';

const Comment_Input = (props) => {
    const textRef = useRef();
    
    const onSubmit = event => {
        event.preventDefault();
        console.log(textRef.current.value);
        textRef.current.value = '';
    }

    return(
        <div className={styles.box}>
            <input
                ref={textRef}
                className={styles.inputBox}
                type="text"
                name="text"
                placeholder="댓글을 입력하세요."
            />
            <button className={styles.inputBtn} onClick={onSubmit}>\n</button>
        </div>
    );
};

export default Comment_Input;