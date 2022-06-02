import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { EmployeeContainer } from 'pods/employee';
import React from 'react';
import { getEmployeeList } from './api';
import { EmployeeList } from './employee-list.component';
import { mapEmployeeListToVM } from './employee-list.mappers';
import { Employee } from './employee-list.vm';

export const EmployeeListContainer: React.FC = () => {
  const [list, setList] = React.useState<Employee[]>([]);
  const [selected, setSelected] = React.useState<string>();

  const retrieveEmployees = (searchTerm: string) => {
    getEmployeeList(searchTerm)
      .then(mapEmployeeListToVM)
      .then(setList);
  };

  const handleSelect = (id: string) => {
    setSelected(id);
  };

  const handleClose = () => {
    setSelected(null);
  };

  return (
    <>
      <EmployeeList
        list={list}
        onSearch={retrieveEmployees}
        onSelect={handleSelect}
      />
      {selected && (
        <>
          <Dialog open={!!selected} onClose={handleClose}>
            <DialogTitle>Employee: {selected}</DialogTitle>
            <DialogContent>
              <EmployeeContainer id={selected} />
            </DialogContent>
          </Dialog>
        </>
      )}
    </>
  );
};
