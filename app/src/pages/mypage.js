import PostContainer from "../components/PostContainer/PostContainer";
import PostContainerRow from "../components/PostContainerRow/PostContainerRow";
import Profile from "../components/Profile/Profile";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';

function MyPage() {
  const router = useRouter();

  //dispatch로 이제.. 그 로그인 상태 바꿀 예정
  // const st = useSelector((state) => state.loginReducer.type);
  // console.log(st);
  // const dispatch = useDispatch();
  // dispatch({ type: 'LOGIN' });
  // console.log({ st });

  useEffect(() => {

    if (localStorage.getItem('accessToken') === null) {
      router.push('/');
    }

    // fetch(`${process.env.REACT_APP_ALG_SERVER}/users/check`)
    //   .then((r) => {
    //     if (r.status != 200) {
    //       router.push('/');
    //     }
    //   });

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