import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  // Link,
  Switch } from "react-router-dom";
// import { context } from 'mobx';
// import { RouteGroup } from
// import { StarterLayout } from './layout';
// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
// import m8zd010010Container from './pages/m8zd010010/container/m8zd010010Container';

// const contextPath = context.path();

const Routes = () => (
  < BrowserRouter>
    {/* <StarterLayout> */}
    <Switch>
      {/* <RouteGroup path="/m8zd010010"> */}
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Redirect from="/" to="/admin/dashboard" />
      {/* <Route path="/m8zd010010" component={m8zd010010Container} /> */}
      {/* </RouteGroup> */}
      
      {/* <Route path="/m8zd010020" component={m8zd010010Container}/> */}
    </Switch>
    {/* </StarterLayout> */}
    {/* <Link to="/bdsbds">홈</Link><br />
    <Link to="/photo">사진</Link><br />
    <Link to="/m8zd010010">m8zd010010</Link><br /> */}
    
  </BrowserRouter >
)

// function Home({ match }) {
//   return <h2>여기는 홈페이지입니다.</h2>
// }
// function Photo({ match }) {
//   return <h2>여기서 사진을 감상하세요.</h2>
// }

export default Routes;