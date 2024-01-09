import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './config/i18next.config.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
