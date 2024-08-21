import axios from 'axios';

const API_BASE_URL = process.env.URL || 'http://127.0.0.1:5000/api';
const AUTH_URL = 'http://127.0.0.1:5000';

export const sendMessageToApi = async (messages) => {
  const response = await axios.post(`${API_BASE_URL}/chat`, { messages });
  return response.data;
};

export const uploadFileToApi = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post(`${AUTH_URL}/upload`, formData);
  return response.data;
};


export const signupUser = async (userData) => {
  try {
    console.log(userData);

    const response = await fetch(`${AUTH_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
       },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Signup failed');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
    throw new Error(error.message || 'Network error');
  }
};



// Login Service
export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, loginData);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error || 'Login failed');
    } else {
      throw new Error('Network error');
    }
  }
};