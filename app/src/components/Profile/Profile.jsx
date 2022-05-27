import React, { Component } from 'react';
import styles from './profile.module.css';

class Profile extends Component {
  render() {
    return (
      <div className={styles.profile}>
        <div className={styles.img}>
          <i className={`${styles.queen} fa-solid fa-chess-queen`}></i>
          <div className={styles.img__cir}></div>
        </div>
        <div className={styles.info}>
          <p className={styles.info__name}>juju</p>
          <p className={styles.info__text}>저의 알고리즘 갤러리에 오신 것을 환영합니다💖</p>
          <div className={styles.info__details}>
            <p className={styles.info__posts}>게시물 <span className={styles.num}>39</span></p>
            <p className={styles.info__followers}>팔로워 <span className={styles.num}>393</span></p>
            <p className={styles.info__follows}>팔로우 <span className={styles.num}>333</span></p>
          </div>
        </div>
        <div className={styles.categories}>
          <div className={styles.categories__name}>categories</div>
          <ul className={styles.categories__tags}>
            <li>전체보기</li>
            <li>BFS</li>
            <li>DFS</li>
            <li>Dijkstra's</li>
            <li>DP</li>
            <li>Tree</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;