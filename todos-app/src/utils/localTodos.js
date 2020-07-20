export const setTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const getTodos = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};
