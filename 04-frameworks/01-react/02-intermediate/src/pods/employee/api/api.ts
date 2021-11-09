import { Employee } from './api.model';
// import { mockedList } from './mocked';

export const getEmployeeById = async (login: string): Promise<Employee[]> => {
  // return mockedList;
  return fetch(`https://api.github.com/users/${login}`).then(handleFetchJson);
};

const handleFetchJson = (response) => {
  if (!response.ok) {
    alert("Wrong Organization, Try another");
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return response.json();
  }
};
