import axios from 'axios';
import { getAuthTokenFromLocalStorage } from './authUtils';

const createApi = () => {
  const baseURL = 'https://conduit.productionready.io/api/';
  const headers = { 'Content-Type': 'application/json' };
  const authToken = getAuthTokenFromLocalStorage();

  if (authToken) {
    headers['Authorization'] = `Token ${authToken}`;
  }

  return axios.create({ baseURL, headers });
};

export const api = createApi();
