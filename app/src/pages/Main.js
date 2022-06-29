import React from 'react';
import ItemList from '../components/item_list/item_list';
import PostAddIcon from '../components/post_add_icon/post_add_icon';
import Search from '../components/search/search';
import styles from '../styles/main.module.css';
import { motion } from 'framer-motion';

const Main = ({ item }) => {
    return (
        <motion.div
            className={styles.feed}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            transition={{ ease: "easeIn", duration: 0.8 }}
        >
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
        </motion.div>
    );
};

export default Main;