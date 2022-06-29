import React, { useRef, useState } from 'react';
import CodeMirror from '../components/CodeMirror/CodeMIrror';
import InputAlg from '../components/input_alg/input_alg';
import InputLang from '../components/input_lang/input_lang';
import InputProbNum from '../components/input_prob_num/input_prob_num';
import styles from '../styles/addpost.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const AddPost = (props) => {
    const router = useRouter();

    const [algCode, setAlgCode] = useState(``);
    const [text, setText] = useState('');
    const textInput = useRef();
    const [tag1, setTag1] = useState('');
    const [tag2, setTag2] = useState('');
    const [tag3, setTag3] = useState('');

    const hiAlgCode = (text) => {
        setAlgCode(text);
    }

    const hiTag1 = (text) => {
        setTag1(text);
    }

    const hiTag2 = (text) => {
        setTag2(text);
    }

    const hiTag3 = (text) => {
        setTag3(text);
    }

    const onChange = e => {
        setText(e.currentTarget.value);
    }

    const postSubmit = () => {
        console.log(`algCode: ${algCode}, text: ${text}, tag1: ${tag1}, tag2: ${tag2}, tag3: ${tag3}`);
        fetch(`${process.env.REACT_APP_ALG_SERVER}/post/registration`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "algCode": algCode,
                "text": text,
                "tag1": tag1,
                "tag2": tag2,
                "tag3": tag3
            })
        })
        .then(response => console.log(response.json()))
        .catch(error => console.log('error', error));
    };

    return (
        <motion.div
            className={styles.post}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            transition={{ ease: "easeIn", duration: 0.7 }}
        >
            <FontAwesomeIcon icon="fa-solid fa-xmark" className={styles.cancel} onClick={() => router.back()} />
            <div className={styles.box}>
                <section className={styles.left}>
                    <div className={styles.leftTag}>
                        <InputLang hiTag1={hiTag1} />
                        <InputProbNum hiTag2={hiTag2} />
                    </div>
                    <div className={styles.codeInput}>
                        <CodeMirror hiAlgCode={hiAlgCode} tag1={(tag1=='C/C++')? 'c' : tag1} />
                    </div>
                </section>
                <section className={styles.right}>
                    <div className={styles.algTagBox}>
                        <InputAlg hiTag3={hiTag3} />
                    </div>
                    <div className={styles.textBox}>
                        <textarea
                            ref={textInput}
                            onChange={onChange}
                            className={styles.textInput}
                            placeholder="코드 설명을 입력하세요."
                            name="postText" id="" cols="50" rows="10"
                        >
                        </textarea>
                    </div>
                    <div className={styles.submitBox}>
                        <button className={styles.submitBtn} onClick={postSubmit}>PUBLISH</button>
                    </div>
                </section>
            </div>
        </motion.div>
    );
}

export default AddPost;