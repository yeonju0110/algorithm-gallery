import styles from "./Post.module.css";
import { useRouter } from 'next/router';

function Post({ post, key }) {
  const router = useRouter();
  console.log(key);
  return (
    <div className={styles.box} onClick={() => {
      router.push(`/post/${post.postid}`)
    }}>
      <h5 className={styles.problem}>백준 #{post.tag2}</h5>
      <div className={styles.lang}>{post.tag1}</div>
      <div className={styles.algorithm}>{post.tag3}</div>
    </div>
  )
}

export default Post;