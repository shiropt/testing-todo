import axios from 'axios';

export const request = async <T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  url: string,
  body?: T,
) => {
  let response;
  switch (method) {
    case 'GET':
      response = await axios.get<T>(url);
      break;
    case 'POST':
      response = await axios.post<T>(url, body);
      break;
    case 'PUT':
      response = await axios.put<T>(url, body);
      break;
    case 'DELETE':
      response = await axios.delete<T>(url);
  }
  return response.data;
};
