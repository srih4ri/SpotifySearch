import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route} from 'react-router';

import App from './App';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/(:filterBy/:searchTerm)" component={App}>
    </Route>
  </Router>,
  document.getElementById('app')
);
