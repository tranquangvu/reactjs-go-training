import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/authConstants';

import { setError, clearError } from './errorActions';

import { setUserToLocalStorage } from '../utils/authUtils';
import { api } from '../utils/apiUtils';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: { user },
});

export const loginFail = () => ({
  type: LOGIN_FAIL,
});

export const login = (credentials) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const { data: { user } } = await api.post('/users/login', credentials);

    setUserToLocalStorage(user);

    dispatch(clearError('login'));
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFail());

    if (!error.response) {
      dispatch(setError('login', { network: ['is unable to execute request'] }));
      throw error;
    }

    dispatch(setError('login', error.response.data.errors));
  }
};
