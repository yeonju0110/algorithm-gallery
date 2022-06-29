import { useRouter } from 'next/router';
import React from 'react';
import styles from './post_add_icon.module.css';

const PostAddIcon = (props) => {
    const router = useRouter();
    
    return (
        <>
            <div className={styles.iconImg} onClick={() => router.push("/addpost")}></div>
        </>
    );
}

export default PostAddIcon;