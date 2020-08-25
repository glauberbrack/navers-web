import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    {/* PRIVATE ROUTES */}
    <Route path="/dashboard" isPrivate component={Dashboard} />
  </Switch>
);

export default Routes;
