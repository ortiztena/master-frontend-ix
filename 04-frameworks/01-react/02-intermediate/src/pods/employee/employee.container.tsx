import React from 'react';
import { getEmployeeById } from './api';
import { EmployeeInfo } from './employee.vm';
import { mapEmployeeByIdToVM } from './employee.mappers';
import { Employee } from './employee.component';

interface Props {
  id: string;
}

export const EmployeeContainer: React.FC<Props> = props => {
  const [employee, setEmployee] = React.useState<EmployeeInfo>(null);
  const { id } = props;

  React.useEffect(() => {
    getEmployeeById(id)
      .then(mapEmployeeByIdToVM)
      .then(setEmployee);
  }, []);

  return <>{employee && <Employee employee={employee} />}</>;
};
