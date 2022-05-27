import React from 'react';
import Header from '../header/header';
import ItemList from '../item_list/item_list';
import PostAddIcon from '../post_add_icon/post_add_icon';
import Search from '../search/search';
import styles from './main.module.css';

const Main = ({ item }) => {
    return (
        <div className={styles.feed}>
            <section className={styles.box}>
                <p className={styles.text}>뭔가 멋있는 문구</p>
                <p className={styles.text}>검색하라는 문구</p>
                <div className={styles.search}>
                    <Search />
                    <Search />
                </div>
            </section>
            <PostAddIcon />
            <ItemList item={item} />
        </div>
    );
};

export default Main;