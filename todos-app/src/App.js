import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

import { getTodos, setTodos } from './utils/localTodos';

import './App.css';

const localTodos = getTodos();

const getCurrentTime = () => (new Date()).getTime();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: localTodos,
      activeFilter: 'all',
    };
  }

  handleCreateTodo = (content) => {
    const { todos: oldTodos } = this.state;
    const now = getCurrentTime();

    const newTodo = {
      id: uuidv4(),
      completed: false,
      createdAt: now,
      updatedAt: now,
      content,
    };
    const todos = [...oldTodos, newTodo];

    setTodos(todos);
    this.setState({ todos });
  }

  handleToggleTodo = (id) => {
    const { todos: oldTodos } = this.state;
    const todos = oldTodos.map((todo) => todo.id === id
      ? { ...todo, completed: !todo.completed, updatedAt: getCurrentTime() }
      : todo
    );

    setTodos(todos);
    this.setState({ todos });
  }

  handleDeleteTodo = (id) => {
    const { todos: oldTodos } = this.state;
    const todos = oldTodos.filter(todo => todo.id !== id);

    setTodos(todos);
    this.setState({ todos });
  }

  handleUpdateTodo = (id, attributes) => {
    const { todos: oldTodos } = this.state;
    const todos = oldTodos.map((todo) => todo.id === id
      ? { ...todo, ...attributes, updatedAt: getCurrentTime() }
      : todo
    );

    setTodos(todos);
    this.setState({ todos });
  }

  handleClearComplete = () => {
    const { todos: oldTodos } = this.state;
    const todos = oldTodos.filter(({ completed }) => !completed);

    setTodos(todos);
    this.setState({ todos });
  }

  handleChangeFilter = (targetFilter) => {
    this.setState({
      activeFilter: targetFilter,
    });
  }

  getIncompletedTodoCount = () => {
    const { todos } = this.state;

    return todos.filter(({ completed }) => !completed).length;
  }

  getTodosByFilter = () => {
    const { todos, activeFilter } = this.state;

    switch (activeFilter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(({ completed }) => !completed);
      case 'complete':
        return todos.filter(({ completed }) => completed);
      default:
        return todos;
    }
  }

  render() {
    const { activeFilter } = this.state;
    const incompletedCount = this.getIncompletedTodoCount();
    const todos = this.getTodosByFilter();

    return (
      <div className='app-container'>
        <div className='todo-container'>
          <TodoForm
            onCreateTodo={this.handleCreateTodo}
          />
          <TodoList
            todos={todos}
            onToggleTodo={this.handleToggleTodo}
            onDeleteTodo={this.handleDeleteTodo}
            onUpdateTodo={this.handleUpdateTodo}
          />
          <TodoFooter
            incompletedCount={incompletedCount}
            activeFilter={activeFilter}
            onChangeFilter={this.handleChangeFilter}
            onClearComplete={this.handleClearComplete}
          />
        </div>
      </div>
    );
  }
}

export default App;
