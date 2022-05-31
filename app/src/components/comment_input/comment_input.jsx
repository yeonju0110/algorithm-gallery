import React, { useRef } from 'react';
import styles from './comment_input.module.css';

const Comment_Input = ({ postid }) => {
    const textRef = useRef();
    
    const onSubmit = event => {
        event.preventDefault();
        console.log(textRef.current.value);

        fetch(`${process.env.REACT_APP_ALG_SERVER}/post/registration`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "postid": postid,
                "text": textRef.current.value
            })
        })
        .then(response => console.log(response.json()))
        .catch(error => console.log('error', error));

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