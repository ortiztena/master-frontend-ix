import React from 'react';
import { EmployeeInfo } from '../employee.vm';
import * as innerClasses from '../employee.styles';

interface Props {
  employee: EmployeeInfo;
}
export const Data: React.FC<Props> = props => {
  const { employee } = props;
  return (
    <>
      <img src={employee.avatar_url} className={innerClasses.img}></img>
      <p>Name: {employee.name}</p>
      <p>Login: {employee.login}</p>
      <p>Company: {employee.company}</p>
      <p>Followers: {employee.followers}</p>
    </>
  );
};
