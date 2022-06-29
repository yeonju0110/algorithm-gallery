import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app.jsx';
import '@fortawesome/fontawesome-free/js/all.js';
import Modal from './service/modal';
import Item from './service/item';
import { Router } from 'react-router-dom';

const modal = new Modal(process.env.REACT_APP_ALG_SERVER);
const item = new Item(process.env.REACT_APP_ALG_SERVER);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App
        modal={modal}
        item={item}
      />
    </Router>
  </React.StrictMode>
);