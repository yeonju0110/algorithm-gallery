import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app.jsx';
import '@fortawesome/fontawesome-free/js/all.js';
import Item from './service/item';

const item = new Item(process.env.REACT_APP_ALG_SERVER);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App item={item} />
  </React.StrictMode>
);