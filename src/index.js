import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Admin from './Admin';
import Client from './Client';

import 'css-loader/dist/cjs';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>

      
    <Link to="/client">
      <button className="btn btn-primary">Client</button>
    </Link>
  
    <Link to="/admin">
      <button className="btn btn-danger">Admin</button>
    </Link>
       

      <Switch>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route path="/client">
          <Client />
        </Route>
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);