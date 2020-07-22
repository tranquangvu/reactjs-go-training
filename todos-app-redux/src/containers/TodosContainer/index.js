import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import TodoFooter from '../../components/TodoFooter';

import { createTodo } from '../../actions/todoActions';

import './index.css';

class TodosContainer extends Component {
  handleCreateTodo = (content) => {
    this.props.createTodo(content);
  };

  render() {
    const { todos, filter } = this.props;

    return (
      <div className='app-container'>
        <div className='todo-container'>
          <TodoForm onCreateTodo={this.handleCreateTodo} />
          <TodoList
            todos={todos}
            onToggleTodo={this.handleToggleTodo}
            onDeleteTodo={this.handleDeleteTodo}
            onUpdateTodo={this.handleUpdateTodo}
          />
          <TodoFooter
            incompletedCount={1}
            activeFilter={filter}
            onChangeFilter={this.handleChangeFilter}
            onClearComplete={this.handleClearComplete}
          />
        </div>
      </div>
    );
  }
}

TodosContainer.propTypes = {
  todos: PropTypes.array,
  filter: PropTypes.string,
  createTodo: PropTypes.func,
};

const mapStateToProps = ({ todo }) => {
  return {
    todos: todo.items,
    filter: todo.filter,
  };
};

const mapDispatchToProps = {
  createTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
