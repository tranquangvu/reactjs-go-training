import { SET_ERROR, CLEAR_ERROR } from '../constants/errorConstants';

const errorReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_ERROR: {
      const { scope, errors } = payload;

      return {
        ...state,
        [scope]: errors,
      };
    }
    case CLEAR_ERROR: {
      const { scope } = payload;

      return {
        ...state,
        [scope]: null,
      };
    }
    default:
      return state;
  }
};

export default errorReducer;
