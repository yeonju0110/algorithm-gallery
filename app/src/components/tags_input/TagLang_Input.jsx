import ReactDOM from 'react-dom/client';
import styles from './inputTagStyles.module.css';

function TagLang_Input() {
    return (
        <div className={styles.tagInput}>
            <select name="lang" className={styles.tagInputText}>
                <option value="" disabled selected># 언어를 선택하세요.</option>
                <option value="C">C</option>
                <option value="C++">C++</option>
                <option value="bash">bash</option>
                <option value="HTML">HTML</option>
                <option value="JavaScript">JavaScript</option>
                <option value="JSON">JSON</option>
                <option value="CSS">CSS</option>
                <option value="PHP">PHP</option>
                <option value="Python">Python</option>
                <option value="Ruby">Ruby</option>
                <option value="SQL">SQL</option>
                <option value="Swift">Swift</option>
                <option value="XML">XML</option>
            </select>
        </div>
    );
}

export default TagLang_Input;