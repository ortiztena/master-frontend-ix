import { Employee } from './api.model';
import { mockedList } from './mocked';

export const getEmployeeList = async (inputValue: string): Promise<Employee[]> => {
  return mockedList;
  // return fetch(`https://api.github.com/orgs/${inputValue}/members`).then(r => r.json());
};

// const getMembers = (inputValue) => {
//   fetch(`https://api.github.com/orgs/${inputValue}/members`)
//     .then(handleFetchJson)
//     .then(setMembers);
// };
