import axios from 'axios';

const computechApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

computechApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };
  return config;
});

export default computechApi;
