import { CREATE_TODO } from '../constants/todoConstants';
import { createTodoInstance } from '../utils/todoUtils';

export const createTodoRequest = (todo) => ({
  type: CREATE_TODO,
  payload: { todo },
});

export const createTodo = (content) => (dispatch) => {
  const todo = createTodoInstance(content);
  dispatch(createTodoRequest(todo));
};
