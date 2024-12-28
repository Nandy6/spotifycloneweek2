import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const register = async (data: { name: string; email: string; password: string }) => {
  const response = await api.post('/auth/register', data);
  return response.data;
};

export const login = async (data: { email: string; password: string }) => {
  const response = await api.post('/auth/login', data);
  return response.data;
};