import ReactDOM from 'react-dom/client';
import styles from './inputTagStyles.module.css';


function TagAlg_Input() {
    return (
        <div className={styles.tagInput}>
            <input type="text" placeholder="알고리즘을 설명할 태그를 입력하세요." className={styles.tagInputText}/>
        </div>
    );
}

export default TagAlg_Input;