import styles from "./PostContainerRow.module.css";
import Post from "../Post/Post";
import { useRef, useEffect, useState } from "react";

function PostContainerRow({ lang }) {
  const container = useRef(null);
  const [postList, setPostList] = useState([]);


  const wheelEvent = (e) => {
    container.current.scrollLeft += (e.deltaY * 0.7);
  }

  const getPosts = () => {
    fetch(`${process.env.REACT_APP_ALG_SERVER}/post/sort/mypage/lang?lang=${lang}`)
      .then((res) => res.json()).then((res) => {
        setPostList(res.data);
      });
  }

  const loadPost = (num, lang, alg) => {
    return (
      <Post key={num} problemNum={num} lang={lang} alg={alg} />
    );
  }

  useEffect(() => {
    getPosts();
  }, []);


  return (
    <div>

      <div>
        <div className={styles.container_title}>
          <div className={styles.title}>#{lang}</div>
        </div>
        <div ref={container} className={styles.container} onWheel={wheelEvent}>
          {postList.map((p) => { return loadPost(p.tag2, p.tag1, p.tag3) })}
        </div>
      </div>
    </div>
  );
}

export default PostContainerRow;