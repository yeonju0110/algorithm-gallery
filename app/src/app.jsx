import React from 'react';
import './app.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Main from './components/main/main';
import LoginPage from './components/LoginForm/LoginForm';
import SignUpPage from './components/SignUpForm/SignUpForm';
import Header from './components/header/header';

function App({ item }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<Main item={item} />} />

          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;