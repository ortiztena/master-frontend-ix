import React from 'react';
import { Employee } from './employee-list.vm';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

interface Props {
  list: Employee[];
}

function handleClick(params) {
  console.log('pressed', params);
}

export const EmployeeList: React.FC<Props> = props => {
  const { list } = props;

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Login</TableCell>
              <TableCell align="center">Id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map(row => (
              <TableRow key={row.id} onClick={() => handleClick(row.id)}>
                <TableCell align="center">{row.login}</TableCell>
                <TableCell align="center">{row.id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
