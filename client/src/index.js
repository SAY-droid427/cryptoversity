import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import  store from './app/store';

import { TransactionProvider } from './context/TransactionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <TransactionProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </TransactionProvider>
    </Provider>    

  
);

