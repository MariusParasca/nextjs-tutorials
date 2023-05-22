import axios from 'axios';

export const myApiAxios = axios.create({
  baseURL: 'http://localhost:8080/api/',
});
