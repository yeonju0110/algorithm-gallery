import PostContainer from "../PostContainer/PostContainer";
import PostContainerRow from "../PostContainerRow/PostContainerRow";
import Profile from "../Profile/Profile";
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function MyPage() {
  const navigate = useNavigate();

  useEffect(() => {

    fetch(`${process.env.REACT_APP_ALG_SERVER}/users/check`)
      .then((r) => {
        if (r.status != 200) {
          navigate('/');
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