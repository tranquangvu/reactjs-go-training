import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../TodoItem';

import './index.css';

class TodoList extends Component {
  render() {
    const { todos, onDeleteTodo, onUpdateTodo } = this.props;

    return (
      <div className='todo-list-container'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            data={todo}
            onDeleteTodo={() => onDeleteTodo(todo.id)}
            onUpdateTodo={(attributes) => onUpdateTodo(todo.id, attributes)}
          />
        ))}
        {todos.length === 0 && (
          <div className='no-data'>
            No todos
          </div>
        )}
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.string,
      completed: PropTypes.bool,
      createdAt: PropTypes.number,
      updatedAt: PropTypes.number,
    }),
  ),
  onDeleteTodo: PropTypes.func,
  onUpdateTodo: PropTypes.func,
};

export default TodoList;
