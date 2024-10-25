import axios from 'axios';

const api = axios.create({
  baseURL: 'https://suaapi.com',
  timeout: 1000,
});

export default api;
