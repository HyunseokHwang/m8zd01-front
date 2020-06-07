import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './vendor';
import './index.css';
// import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';
// const store = {
//   m8zd010010: new m8zd010010Store(),
// };
// const m8zd010010 = new m8zd010010Store();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
