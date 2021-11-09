import * as am from './api/index';
import * as vm from './employee.vm';

export const mapEmployeeByIdToVM = (data: am.Employee[]): vm.EmployeeInfo[] => {
  return data.map(mapEmployeeToVM);
};

const mapEmployeeToVM = (data: am.Employee): vm.EmployeeInfo => ({
  login: data.login,
  avatar_url: data.url,
  name: data.name,
  company: data.company,
  followers: data.followers,
});
