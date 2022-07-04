import React from 'react';
import Header from '../header/header';
import ItemList from '../item_list/item_list';
import Search from '../search/search';
import styles from './main.module.css';

const Main = ({ item }) => {

    return (
        <div className={styles.feed}>
            <section className={styles.box}>
                <p className={styles.text}>Algorithm Gallery</p>
                <p className={styles.text}></p>
                <div className={styles.search}>
                    <Search />
                    <Search />
                </div>
            </section>
            <ItemList item={item} />
        </div>
    );
};

export default Main;