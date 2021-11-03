import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './router';
import { EmployeeListScene, EmployeeScene } from 'scenes';

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path={switchRoutes.employeeList}>
          <EmployeeListScene />
        </Route>
        <Route exact={true} path={switchRoutes.employeeDetail}>
          <EmployeeScene />
        </Route>
      </Switch>
    </HashRouter>
  );
};
