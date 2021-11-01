export const handleFetchJson = (response) => {
  if (!response.ok) {
    alert("Wrong Organization, Try another");
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return response.json();
  }
};
