import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Como será servido no mesmo domínio, usamos caminho relativo
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default api;
