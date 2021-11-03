import { routes } from 'core/router/router';
import React from 'react';
import { Link } from 'react-router-dom';

export const EmployeeScene: React.FC = () => {
  return (
    <>
      <h1>Employee Scene!</h1>
      <Link to={routes.employeeList}>Back to employee list</Link>
    </>
  );
};
