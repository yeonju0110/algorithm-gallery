import React from 'react';
import styles from './comment_item.module.css';
import styled from 'styled-components';
import { useState } from 'react';

const CommentItem = ({ commentId, comment }) => {

  const onClickDeleteBtn = () => {
    fetch(`${process.env.REACT_APP_ALG_SERVER}/comment/${commentId}`, {
      // credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('accessToken')}`,
      }
    })
      .then(response => { console.log(response) })
      .catch(error => console.log('error', error));
  }

  if (localStorage.getItem('admin') === 'true') {
    return (
      <div className={styles.user}>
        <div className={styles.container}>

          <div className={styles.comment}>

            <div className={styles.userImg}></div>

            <div className={styles.info}>
              <p className={styles.name}>{comment.users.userid}</p>
              <p className={styles.text}>{comment.text}</p>
            </div>

          </div>

          <Button className={styles.btn} onClick={onClickDeleteBtn}>삭제하기</Button>

        </div>
      </div>
    );
  }
  else {
    return (
      <div className={styles.user}>

        <div className={styles.comment}>

          <div className={styles.userImg}></div>

          <div className={styles.info}>
            <p className={styles.name}>{comment.users.userid}</p>
            <p className={styles.text}>{comment.text}</p>
          </div>
        </div>
      </div>
    );
  }
};


const Button = styled.button`
  
`;



export default CommentItem;
