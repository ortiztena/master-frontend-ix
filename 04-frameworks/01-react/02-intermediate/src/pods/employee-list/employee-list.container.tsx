import React from 'react';
import { getEmployeeList } from './api';
import { EmployeeList } from './employee-list.component';
import { mapEmployeeListToVM } from './employee-list.mappers';
import { Employee } from './employee-list.vm';

export const EmployeeListContainer: React.FC = () => {
  const [list, setList] = React.useState<Employee[]>([]);
  const [inputValue, setInputValue] = React.useState<string>('lemoncode');

  React.useEffect(() => {
    getEmployeeList(inputValue)
      .then(mapEmployeeListToVM)
      .then(setList);
  }, []);

  //employeeList
  return <EmployeeList list={list} />;
};
