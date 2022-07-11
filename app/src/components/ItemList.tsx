import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const ItemList: React.FC = () => {
  const router = useRouter();
  const [latestPosts, setLatestPosts] = useState<any[]>([]);

  const items = async () => {
    const { data } = await axios(
      'http://ec2-3-37-61-166.ap-northeast-2.compute.amazonaws.com:8080/post'
    );
    setLatestPosts(data);
  };

  useEffect(() => {
    items();
  }, []);

  return (
    <CardWrapper>
      {latestPosts.map(post => (
        <Card
          key={post.postid}
          onClick={() => router.push(`/post/${post.postid}`)}
        >
          <h5>백준 #{post.tag2}</h5>
          <LangName>{post.tag1}</LangName>
          <AlgorithmName>{post.tag3}</AlgorithmName>
        </Card>
      ))}
    </CardWrapper>
  );
};

export default ItemList;

const CardWrapper = styled.div`
  width: 100%;
  padding: 87px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  padding: 40px;
  margin: 15px;
  border-radius: 10%;
  box-shadow: 10px 5px 5px #d2d2d2;
  flex-shrink: 0;
  background-color: #ecffff;
  color: ${props => props.theme.color.agBlue};
  &:hover {
    cursor: pointer;
    filter: grayscale(70%);
  }
`;

const LangName = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;

const AlgorithmName = styled.div`
  font-size: 40px;
  font-weight: 500px;
`;
