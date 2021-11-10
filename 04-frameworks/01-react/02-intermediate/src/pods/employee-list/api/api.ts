import { Employee } from './api.model';

export const getEmployeeList = async (inputValue: string): Promise<Employee[]> => {
  return fetch(`https://api.github.com/orgs/${inputValue}/members`).then(handleFetchJson);
};

const handleFetchJson = (response) => {
  if (!response.ok) {
    alert("Wrong Organization, Try another");
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return response.json();
  }
};
