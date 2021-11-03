import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  employeeList: string;
  employeeDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  employeeList: '/employees-list',
  employeeDetail: '/employee/:id',
};

interface Routes extends Omit<SwitchRoutes, 'employeeDetail'> {
  employeeDetail: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  employeeDetail: (id: string) =>
    generatePath(switchRoutes.employeeDetail, { id }),
};
