import React from 'react';
import { Employee } from './employee-list.vm';
import { BasicTextFields, ContainedButton } from 'common';
import { StickyHeadTable } from 'common';

interface Props {
  list: Employee[];
  onSelect: (selectTerm: string) => void;
  onSearch: (searchTerm: string) => void;
}

export const EmployeeList: React.FC<Props> = props => {
  const { list, onSearch, onSelect } = props;
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
      <StickyHeadTable list={list} onSelect={onSelect} />
    </>
  );
};
