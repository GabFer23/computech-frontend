import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ComputechApp } from './ComputechApp';
import './index.css';
import { store } from './store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ComputechApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
