import React from 'react';
import './app.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Main from './components/main/main';
import LoginPage from './components/LoginForm/LoginForm';
import SignUpPage from './components/SignUpForm/SignUpForm';
import Header from './components/header/header';
import PostView from './components/post_view/post_view';
import PostAddContainer from './components/post_add_container/post_add_container';
import MyPage from './components/MyPage/MyPage';

function App({ modal, item }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<Main item={item} />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/p/:no' element={<PostView modal={modal} />} />
          <Route path='/a' element={<PostAddContainer />} />
          <Route path='/mypage' element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;