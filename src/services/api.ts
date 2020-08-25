import axios from 'axios';
import { prodURL } from '../utils/config';

const api = axios.create({
  baseURL: prodURL,
});

export default api;
