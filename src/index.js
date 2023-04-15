import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App/App';
 
import './index.css';
import { store } from 'redux/store';

import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
         <App />
        </BrowserRouter>
        </PersistGate>
    </Provider>
  </React.StrictMode>
);
