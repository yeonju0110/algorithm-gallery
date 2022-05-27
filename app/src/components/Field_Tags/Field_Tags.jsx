import { ReactDOM } from "react";
import TagLang_Input from "../tags_input/TagLang_Input.jsx";
import TagPrb_Input from "../tags_input/TagProb_Input.jsx";
import styles from './Field_Tags.module.css';

function Field_Tags() {
    return (
        <>
            <div className={styles.requiredTags}>
                <TagLang_Input />
                <TagPrb_Input />
            </div>
        </>
    );
}

export default Field_Tags;
