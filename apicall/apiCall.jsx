import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { CourrierEnum } from './enum';
import { getDataFromStorage } from './localStorageFunction';
import { apiUrl } from './env';
SecureStore.getItemAsync

const getToken = async () => {
  try {
    const token = await  SecureStore.getItemAsync(CourrierEnum.USERTOKEN);
    return token;
  } catch (error) {
    console.error('Error getting token', error);
    return '';
  }
};

const api = axios.create({
  baseURL: apiUrl,
});

api.interceptors.request.use(
  async function (config) {
    const token = await getToken();
    console.log(token,'asdada');
    // Add headers
    config.headers = {
      ...config.headers, 
      'Content-Type': config.data instanceof FormData ? 'multipart/form-data' : 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      SecureStore.deleteItemAsync(CourrierEnum.USERTOKEN);
    //   navigation.navigate('');
    }
    return Promise.reject(error);
  }
);

export default api;
