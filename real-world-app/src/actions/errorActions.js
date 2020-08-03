import { SET_ERROR, CLEAR_ERROR } from '../constants/errorConstants';

export const setError = (scope, errors) => (dispatch) => {
  dispatch({ type: SET_ERROR, payload: { scope, errors } });
};

export const clearError = (scope) => (dispatch) => {
  dispatch({ type: CLEAR_ERROR, payload: { scope } });
};
