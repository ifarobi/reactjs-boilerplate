import React from 'react';
import ReactDom from 'react-dom';
import path from 'path';

import {Router, browserHistory, hashHistory} from 'react-router';

import App from './App';

let history = (Modernizr && Modernizr.history) ? browserHistory : hashHistory;

global.SRCDIR = path.resolve(__dirname);

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
