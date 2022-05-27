import ReactDOM from 'react-dom/client';
import styles from './inputTagStyles.module.css';

function TagProb_Input() {
    
    return (
        <div className={styles.tagInput}>
            <div className={styles.tagInputText}># </div>
            <input type="text" placeholder="문제번호를 입력하세요." className={styles.tagInputText}/>
        </div>
    );
}

export default TagProb_Input;