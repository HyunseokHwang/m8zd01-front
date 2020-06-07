import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch } from "react-router-dom";
// import { context } from 'mobx';

import StarterLayout from './starterlayout/StarterLayout';
import LoginLayout from './layouts/LoginLayout';
// import Admin from "layouts/Admin.js";
// import RTL from "layouts/RTL.js";

// import m8zd010010Container from './pages/m8zd010010/container/m8zd010010Container';

// const contextPath = context.path();

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={StarterLayout} />
      <Route path="/login" component={LoginLayout} />
      {/* <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} /> */}
      {/* <Redirect from="/" to="/admin/dashboard" /> */}
      <Redirect from="/" to="/home" />
      {/* <Route path="/m8zd010010" component={m8zd010010Container} /> */}
      
      {/* <Route path="/m8zd010020" component={m8zd010010Container}/> */}
    </Switch>
    
  </BrowserRouter >
)

export default Routes;