import React from 'react';
import { getEmployeeList } from './api';
import { EmployeeList } from './employee-list.component';
import { mapEmployeeListToVM } from './employee-list.mappers';
import { Employee } from './employee-list.vm';

export const EmployeeListContainer: React.FC = () => {
  const [list, setList] = React.useState<Employee[]>([]);

  const retrieveEmployees = (searchTerm: string) => {
    getEmployeeList(searchTerm)
      .then(mapEmployeeListToVM)
      .then(setList);
  };

  return (
    <>
      <EmployeeList list={list} onSearch={retrieveEmployees} />
    </>
  );
};
