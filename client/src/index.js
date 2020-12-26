import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Register from "./Register";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Register" component={Register} />
        </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

