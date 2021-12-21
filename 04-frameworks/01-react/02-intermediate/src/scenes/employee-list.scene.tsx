import { EmployeeListContainer } from 'pods/employee-list';
import React from 'react';
import { AppLayout } from 'layout';

export const EmployeeListScene: React.FC = () => {
  return (
    <>
      <AppLayout />
      <EmployeeListContainer />
    </>
  );
};
