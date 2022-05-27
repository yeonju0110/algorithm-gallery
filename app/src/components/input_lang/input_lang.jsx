import React from 'react';
import styles from './input_lang.module.css';

const InputLang = (props) => {
    return(
        <div className={styles.box}>
            <select name="lang" className={styles.lang} defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled># 언어를 선택하세요.</option>
                <option value="C/C++">C/C++</option>
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