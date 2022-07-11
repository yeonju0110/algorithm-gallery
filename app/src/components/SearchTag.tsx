import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SearchTag: React.FC = () => {
  const [tag1, setTag1] = useState('DEFAULT');

  const tagChangeHandler = e => {
    setTag1(e.currentTarget.value);
  };

  return (
    <Box>
      <Title># 언어</Title>
      <TagHandeler onChange={tagChangeHandler} name="lang" value={tag1}>
        <Opt value="DEFAULT" disabled>
          언어
        </Opt>
        <Opt value="C/C++">C/C++</Opt>
        <Opt value="JavaScript">JavaScript</Opt>
        <Opt value="Python">Python</Opt>
        <Opt value="Java">Java</Opt>
        <Opt value="Swift">Swift</Opt>
        <Opt value="PHP">PHP</Opt>
      </TagHandeler>
    </Box>
  );
};

export default SearchTag;

const Box = styled.div`
  width: 150px;
  height: 65px;
  background-color: ${props => props.theme.color.agBlue};
  color: white;
  box-shadow: 0px 4px 4px 0px #00000025;
  border-radius: 32.5px;
  margin: 2rem 2rem 0 2rem;
`;

const Title = styled.p`
  margin-left: 20px;
  margin-top: 12px;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 12px;
`;

const TagHandeler = styled.select`
  border-width: 0;
  appearance: none;
  font-weight: 300;
  font-size: 20px;
  letter-spacing: -0.015em;
  padding-top: 6px;
  padding-left: 27px;
  color: ${props => props.theme.color.agMint};
  cursor: pointer;
`;

const Opt = styled.option``;
