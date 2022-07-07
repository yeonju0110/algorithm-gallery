
import React, { useState, useEffect } from 'react';
import Item from '../item/item';
import styles from './item_list.module.css';


const ItemList = ({ item }) => {
    const [latestPosts, setLatestPosts] = useState([]);

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