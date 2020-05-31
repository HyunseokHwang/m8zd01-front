import React from 'react';
// import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import { Provider } from "mobx-react";
import Routes from './Routes';
import m8zd010010Store from './pages/m8zd010010/store/m8zd010010Store';

const m8zd010010 = m8zd010010Store;

const App = () => (

    <Provider
      m8zd010010Store = {m8zd010010}
      >
        <Routes />
    </Provider>
);

export default App;