import PostContainer from "../components/PostContainer/PostContainer";
import PostContainerRow from "../components/PostContainerRow/PostContainerRow";
import Profile from "../components/Profile/Profile";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

function MyPage() {
  const router = useRouter();

  useEffect(() => {

    fetch(`${process.env.REACT_APP_ALG_SERVER}/users/check`)
      .then((r) => {
        if (r.status != 200) {
          router.push('/');
        }
      });

  }, []);


  return (
    <div>
      <Profile />
      <PostContainer>
        <PostContainerRow lang="JavaScript" />
        <PostContainerRow lang="Python" />
        <PostContainerRow lang="Java" />
      </PostContainer>
    </div >
  );
}

export default MyPage;