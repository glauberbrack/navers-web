import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';
import CreateNaver from '../pages/Navers/Create';
import EditNaver from '../pages/Navers/Edit';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    {/* PRIVATE ROUTES */}
    <Route path="/dashboard" isPrivate component={Dashboard} />
    <Route path="/naver/create" isPrivate component={CreateNaver} />
    <Route path="/naver/edit" isPrivate component={EditNaver} />
  </Switch>
);

export default Routes;
