import React, { useEffect, useState } from 'react';
import styles from './input_lang.module.css';

const InputLang = (props) => {
    const [tag1, setTag1] = useState('DEFAULT');

    const tagChangeHandler = (e) => {
        setTag1(e.currentTarget.value);
    }

    useEffect(() => {
        props.hiTag1(tag1);
    }, [tag1]);

    return(
        <div className={styles.box}>
            <select onChange={tagChangeHandler} name="lang" className={styles.lang} value={tag1}>
                <option value='DEFAULT' disabled># 언어를 선택하세요.</option>
                <option value='C/C++'>C/C++</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="Swift">Swift</option>
                <option value="PHP">PHP</option>
            </select>
        </div>
    );
};

export default InputLang;