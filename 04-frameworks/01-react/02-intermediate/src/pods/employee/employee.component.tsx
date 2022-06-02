import React from 'react';
import { EmployeeInfo } from './employee.vm';
import { Data } from './components/data.component';

interface Props {
  employee: EmployeeInfo;
}

export const Employee: React.FC<Props> = props => {
  const { employee } = props;
  return (
    <>
      <Data employee={employee} />
    </>
  );
};
