import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* 나눔 스퀘어 */
  @font-face {
      font-family: "NanumSquare";
      font-weight: 300;
      src: url("../../public/fonts/NanumSquareL.ttf");
  }
  @font-face {
      font-family: "NanumSquare";
      font-weight: 400;
      src: url("../../public/fonts/NanumSquareR.ttf");
  }
  @font-face {
      font-family: "NanumSquare";
      font-weight: 500;
      src: url("../../public/fonts/NanumSquareB.ttf");
  }
  @font-face {
      font-family: "NanumSquare";
      font-weight: 700;
      src: url("../../public/fonts/NanumSquareEB.ttf");
  }
  * {
    margin: 0;
    padding: 0;  
  }
  html {
    font-size: 62.5%; // 1rem = 10px; 10px/16px = 62.5%
    height: 100vh;
  }
  body {
    box-sizing: border-box;
    font-size: 1.6rem;   
  }
  a {
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: inherit;
      text-decoration: inherit;
    }
  }
  input,
  select,
  button {
    -webkit-appearance: none;
    background: none;
    border: none;
    font-size: inherit;
    color: inherit;
    &:focus {
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
  a, button {
    cursor: pointer;
  }
  pre {
    white-space: pre-line;
  }
`;

export default GlobalStyle;
