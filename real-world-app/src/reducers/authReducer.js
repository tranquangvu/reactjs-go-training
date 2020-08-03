import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/authConstants';
import { getUserFromLocalStorage } from '../utils/authUtils';

const user = getUserFromLocalStorage();

const initialState = {
  user: user,
  authenticated: !!user,
  loading: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS: {
      const { user } = payload;

      return {
        ...state,
        user: user,
        authenticated: true,
        loading: false,
      };
    }
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
