import React from 'react';

import {Route} from 'react-router';

import App from '../components/App';

import About from '../components/pages/About';
import NotFound from '../components/pages/NotFound';

const routes = (
  <Route path="/" component={App}>
    <Route path="about" component={About}/>
    <Route path="*" component={NotFound}/>
  </Route>
)

export default routes;
