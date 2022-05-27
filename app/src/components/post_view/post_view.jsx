import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './post_view.module.css';
import PostModal from '../post_modal/post_modal';

const PostView = ({ modal }) => {
    const [postModal, setPostModal] = useState([]);
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);

    const { no } = useParams();

    useEffect(() => {
        modal
            .showPost(no)
            .then(postModal => setPostModal(postModal));
    }, []);
    
    useEffect(() => {
        modal
            .showComment(no)
            .then(comments => setComments(comments));
    }, []);

    useEffect(() => {
        modal
            .showLikes(no)
            .then(likes => setLikes(likes));
    }, []);

    return (
        <div className={styles.box}>
            <PostModal postModal={postModal} comments={comments} likes={likes} />
        </div>
    );
    
};

export default PostView;