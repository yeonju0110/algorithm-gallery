import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './post_add_icon.module.css';

function PostAddIcon() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.iconImg} onClick={() => navigate('/a')}></div>
        </>
    )
}

export default PostAddIcon;