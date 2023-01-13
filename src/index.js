import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* 가장 큰 컴포넌트에 딱 한번만 쓴다  */}
    <App />
  </BrowserRouter>
);

reportWebVitals();
