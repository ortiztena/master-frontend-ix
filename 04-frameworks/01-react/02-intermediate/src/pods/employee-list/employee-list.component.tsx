import React from 'react';
import { Employee } from './employee-list.vm';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { BasicTextFields, ContainedButton } from 'common';

interface Props {
  list: Employee[];
  onSearch: (searchTerm: string) => void;
}

export const EmployeeList: React.FC<Props> = props => {
  const { list, onSearch } = props;
  const [inputValue, setInputValue] = React.useState<string>('lemoncode');

  React.useEffect(() => {
    onSearch(inputValue);
  }, []);

  const handleClick = () => {
    onSearch(inputValue);
  };

  return (
    <>
      <BasicTextFields inputValue={inputValue} setInputValue={setInputValue} />
      <ContainedButton onClick={handleClick}>Search</ContainedButton>
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
              <TableRow key={row.id}>
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
