import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {  RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainRouter from './router/MainRouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={MainRouter}/>
  </Provider>
  
);