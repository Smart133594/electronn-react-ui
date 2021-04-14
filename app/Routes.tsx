/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';

import DashboardPage from './containers/Dashboard';
import TaskPage from './containers/Task';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.TASK} component={TaskPage} />
        <Route path={routes.DASHBOARD} component={DashboardPage} />
        <Route path={routes.HOMEPAGE} component={DashboardPage} />
      </Switch>
    </App>
  );
}
