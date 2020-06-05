// /*!

// =========================================================
// * Material Dashboard React - v1.9.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/material-dashboard-react
// * Copyright 2020 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
// import React from "react";
// import ReactDOM from "react-dom";
// import { createBrowserHistory } from "history";
// import { Router, Route, Switch, Redirect } from "react-router-dom";

// // core components
// import Admin from "layouts/Admin.js";
// import RTL from "layouts/RTL.js";

// import "assets/css/material-dashboard-react.css?v=1.9.0";

// const hist = createBrowserHistory();

// ReactDOM.render(
//   <Router history={hist}>
//     <Switch>
//       <Route path="/admin" component={Admin} />
//       <Route path="/rtl" component={RTL} />
//       <Redirect from="/" to="/admin/dashboard" />
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './vendor';
// import m8zd010010Store from './pages/m8zd010010/index';
// import m8zd010010Store from './pages/m8zd010010/store/m8zd010010Store';
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
