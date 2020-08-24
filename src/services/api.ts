import axios from 'axios';
import { prodURL } from '../utils/config';

const api = axios.create({
  baseURL: prodURL,
});

api.interceptors.request.use(async request => {
  const token = localStorage.getItem('@Navers:token');
  const user = localStorage.getItem('@Navers:user');

  if (token && user) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});

export default api;
