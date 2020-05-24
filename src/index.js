import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react'
import * as serviceWorker from './serviceWorker';
// import m8zd010010Store from './pages/m8zd010010/index';
import m8zd010010Store from './pages/m8zd010010/store/m8zd010010Store';

const store = {
  m8zd010010: new m8zd010010Store(),
};
// const m8zd010010 = new m8zd010010Store();


ReactDOM.render(
  <Provider 
    m8zd010010Store = {store.m8zd010010}
  >
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
