import React from 'react';
import { getEmployeeById } from './api';
import { EmployeeInfo } from './employee.vm';
import { useParams } from 'react-router';
import { mapEmployeeByIdToVM } from './employee.mappers';
import { Employee } from './employee.component';

export const employeeContainer: React.FC = () => {
  const [employee, setEmployee] = React.useState<EmployeeInfo>(null);

  const { login } = useParams<{ login: string }>();

  React.useEffect(() => {
    getEmployeeById(login).then(mapEmployeeByIdToVM);
    // .then(setEmployee);
  }, []);

  return <Employee employee={employee} onCancel={null} onSave={null} />;
};
//api
