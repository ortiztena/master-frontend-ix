import { Employee } from './api.model';

export const getEmployeeById = async (login: string): Promise<Employee> => {
  return fetch(`https://api.github.com/users/${login}`).then(handleFetchJson);
};

const handleFetchJson = (response: any) => {
  if (!response.ok) {
    alert("Response server error, Try another user");
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return response.json();
  }
};
