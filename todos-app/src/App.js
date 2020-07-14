import React, { Component } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

import './App.css';

const fakeTodos = [
  { id: 1, content: 'Learn ruby', completed: true },
  { id: 2, content: 'Learn react', completed: false },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: fakeTodos,
    };
  }

  handleCreateTodo = (content) => {
    const { todos: oldTodos } = this.state;
    const newTodo = {
      id: (new Date()).getTime(),
      completed: false,
      content,
    };
    const todos = [...oldTodos, newTodo];

    this.setState({ todos });
  }

  handleToggleTodo = (id) => {
    const { todos: oldTodos } = this.state;
    const todos = oldTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    this.setState({ todos });
  }

  render() {
    const { todos } = this.state;

    return (
      <div className='app-container'>
        <div class='todo-container'>
          <TodoForm
            onCreateTodo={this.handleCreateTodo}
          />
          <TodoList
            todos={todos}
            onToggleTodo={this.handleToggleTodo}
          />
          <TodoFooter />
        </div>
      </div>
    );
  }
}

export default App;
