import { Provider } from 'react-redux';
import React from 'react';
import { store } from './store/store.js';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './scss/style.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
