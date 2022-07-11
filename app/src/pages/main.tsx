import React from 'react';
import styled from 'styled-components';
import ItemList from '../components/ItemList';
import PostAddIcon from '../components/post_add_icon/post_add_icon';
import SearchTag from '../components/SearchTag';

const Main: React.FC = () => {
  return (
    <Feed>
      <Box>
        <Slogan>당신이 찾는 모든 코드</Slogan>
        <Slogan>지금 바로, 검색하세요</Slogan>
        <SearchBox>
          <SearchTag />
          <SearchTag />
        </SearchBox>
      </Box>
      <PostAddIcon />
      <ItemList />
    </Feed>
  );
};

export default Main;

const Feed = styled.div`
  width: 100%;
`;
const Box = styled.div`
  background-color: ${props => props.theme.color.agGray};
  width: 100%;
  height: 506px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Slogan = styled.p`
  font-size: 64px;
  font-weight: 300;
  margin: 1rem;
`;
const SearchBox = styled.div`
  display: flex;
`;
