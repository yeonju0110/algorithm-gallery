import React from 'react';
import './app.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Main from './components/main/main';

function App({ item }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Main item={item} />} />
        </Routes>
      </BrowserRouter>
    </div>
    );
}

export default App;
