import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react'
import * as serviceWorker from './serviceWorker';
import m8zd010001Store from './pages/m8zd010001/store/m8zd010001Store';

const m8zd010001 = new  m8zd010001Store();


ReactDOM.render(
  <Provider 
    m8zd010001Store = {m8zd010001}
  >
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
