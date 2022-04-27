import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import "./dashboard.css"
import '../node_modules/swiper/swiper-bundle.min.css'

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
