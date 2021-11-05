import { EmployeeListContainer } from 'pods/employee-list';
import React from 'react';
import { AppLayout, ContainedButtons, BasicTextFields } from 'layout';

export const EmployeeListScene: React.FC = () => {
  return (
    <>
      <AppLayout>
        <BasicTextFields />
        <ContainedButtons />
        {/* <h1>Employee list Scene!</h1> */}
        <EmployeeListContainer />
      </AppLayout>
    </>
  );
};
