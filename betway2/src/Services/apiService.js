const API_URL = 'https://bbackendapi.azurewebsites.net/api/betway';

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/data`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};