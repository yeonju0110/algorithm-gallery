import styles from "./Post.module.css";

function Post({ problemNum, lang, alg }) {

  return (
    <div className={styles.box}>
      <h5 className={styles.problem}>백준 #{problemNum}</h5>
      <div className={styles.lang}>{lang}</div>
      <div className={styles.algorithm}>{alg}</div>
    </div>
  )
}

export default Post;