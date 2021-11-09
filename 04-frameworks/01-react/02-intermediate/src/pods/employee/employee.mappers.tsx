import * as am from './api/index';
import * as vm from './employee.vm';

export const mapEmployeeByIdToVM = (data: am.Employee): vm.EmployeeInfo => {
  return mapEmployeeToVM(data);
};

const mapEmployeeToVM = (data: am.Employee): vm.EmployeeInfo => ({
  login: data.login,
  avatar_url: data.avatar_url,
  name: data.name,
  company: data.company,
  followers: data.followers,
});
