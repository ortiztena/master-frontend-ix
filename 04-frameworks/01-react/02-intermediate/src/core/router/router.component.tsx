import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './router';
import { EmployeeListScene, EmployeeScene } from 'scenes';

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={switchRoutes.employeeList}
          component={EmployeeListScene}
        />
        <Route
          exact={true}
          path={switchRoutes.employeeDetail}
          component={EmployeeScene}
        />
      </Switch>
    </HashRouter>
  );
};
