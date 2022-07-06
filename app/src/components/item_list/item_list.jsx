import React, { useState, useEffect } from 'react';
import Item from '../item/item';
import styles from './item_list.module.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const ItemList = ({ item }) => {
    const [latestPosts, setLatestPosts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        item.showLatest().then(latestPosts => setLatestPosts(latestPosts));
    }, []);


    return (
        <div className={styles.box}>
            {latestPosts.map(latestPost => (
                <Item
                    key={latestPost.postid}
                    latestPost={latestPost}
                />
            ))}
        </div>
    );
};

export default ItemList;