import React from 'react';
import { EmployeeContainer } from 'pods/employee';
import { AppLayout } from 'layout';
import { useParams } from 'react-router-dom';

export const EmployeeScene: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <AppLayout />
      <EmployeeContainer id={id} />
    </>
  );
};
