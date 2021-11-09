import React from 'react';
import { EmployeeInfo } from '../employee.vm';

interface Props {
  employee: EmployeeInfo;
}
export const Data: React.FC<Props> = props => {
  const { employee } = props;
  return (
    <>
      <img src={employee.avatar_url} width="150"></img>
      <p>Name:{employee.name}</p>
      <p>Login: {employee.login}</p>
      <p>Company: {employee.company}</p>
      <p>Followers: {employee.followers}</p>
    </>
  );
};
