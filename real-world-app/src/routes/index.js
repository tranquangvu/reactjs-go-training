import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import HomeContainer from '../containers/HomeContainer';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';

function Routes({ authenticated }) {
  return (
    <Switch>
      <PrivateRoute exact path='/' authenticated={authenticated}>
        <HomeContainer />
      </PrivateRoute>
      <Route path='/login'>
        <LoginContainer />
      </Route>
      <Route path='/register'>
        <RegisterContainer />
      </Route>
    </Switch>
  );
}

export default Routes;
