import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Change this URL based on your backend

// Authentication
export const loginUser = (credentials) => {
  return axios.post(`${API_URL}/auth/login`, credentials);
};

export const registerUser = (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

// Tasks
export const getTasks = () => {
  const token = localStorage.getItem('token');
  return axios.get(`${API_URL}/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createTask = (taskData) => {
  const token = localStorage.getItem('token');
  return axios.post(`${API_URL}/tasks`, taskData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
