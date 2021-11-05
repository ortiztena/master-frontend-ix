import * as am from './api/api.model';
import * as vm from './employee-list.vm';

export const mapEmployeeListToVM = (data: am.Employee[]): vm.Employee[] => data.map(mapEmployeeToVM);

const mapEmployeeToVM = (data: am.Employee): vm.Employee => ({
  login: data.login,
  id: data.id,
  avatar_url: data.url,
})
