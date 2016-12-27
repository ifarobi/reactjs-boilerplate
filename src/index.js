import React from 'react';
import ReactDom from 'react-dom';

import {Router, browserHistory, hashHistory} from 'react-router';

import App from './App';

let history = (Modernizr && Modernizr.history) ? browserHistory : hashHistory;

const rootRoute = {
  childRoutes: [{
    path : "/",
    component: require('./App').default,
    childRoutes: [
      require('./routes/Profile').default,
      require('./routes/Messages').default
    ]
  }]
}

ReactDom.render(
  <Router
    history={history}
    routes={rootRoute}
  />
  , document.getElementById('root'));
