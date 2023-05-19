import axios from 'axios';

export const jsonPlaceholderAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
