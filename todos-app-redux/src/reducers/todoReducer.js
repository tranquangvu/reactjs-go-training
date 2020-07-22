import { CREATE_TODO } from '../constants/todoConstants';

const initialState = {
  items: [],
  filter: 'all',
};

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_TODO:
      return {
        ...state,
        items: [...state.items, payload.todo],
      };
    default:
      return state;
  }
};

export default todosReducer;
