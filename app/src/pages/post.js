import React, { useState, useEffect } from 'react';
import styles from '../styles/post.module.css';
import PostModal from '../components/post_modal/post_modal';
import Modal from '../service/modal';

const Post = () => {
    const [postModal, setPostModal] = useState([]);
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);

    const modal = new Modal(process.env.REACT_APP_ALG_SERVER, postNum);

    useEffect(() => {
        modal
            .showPost()
            .then(postModal => setPostModal(postModal));
        modal
            .showComment()
            .then(comments => setComments(comments));
        modal
            .showLikes()
            .then(likes => setLikes(likes));
    }, []);


    return (
        <div className={styles.box}>
            <PostModal postModal={postModal} comments={comments} likes={likes} />
        </div>
    );

};

export default Post;