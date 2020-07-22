import { v4 as uuidv4 } from 'uuid';

const getCurrentTime = () => (new Date()).getTime();

export const createTodoInstance = (content) => {
  const now = getCurrentTime();

  return {
    id: uuidv4(),
    completed: false,
    createdAt: now,
    updatedAt: now,
    content,
  };
};

export const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const fetchTodosFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};
