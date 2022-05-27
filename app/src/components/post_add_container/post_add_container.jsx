import React from 'react';
import InputAlg from '../input_alg/input_alg';
import InputLang from '../input_lang/input_lang';
import InputProbNum from '../input_prob_num/input_prob_num';
import styles from './post_add_container.module.css';

const PostAddContainer = (props) => {
    return (
        <div className={styles.post}>
            <i className={`${styles.cancel} fa-solid fa-times`}></i>
            <div className={styles.box}>
                <section className={styles.left}>
                    <div className={styles.leftTag}>
                        <InputLang />
                        <InputProbNum />
                    </div>
                    <div className={styles.codeInput}>
                        // write your codes here...
                    </div>
                </section>
                <section className={styles.right}>
                    <div className={styles.algTagBox}>
                        <InputAlg />
                    </div>
                    <div className={styles.textBox}>
                        <textarea
                            className={styles.textInput}
                            placeholder="코드 설명을 입력하세요."
                            name="postText" id="" cols="30" rows="10"
                        >
                        </textarea>
                    </div>
                    <div className={styles.submitBox}>
                        <button className={styles.submitBtn}>PUBLISH</button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default PostAddContainer;