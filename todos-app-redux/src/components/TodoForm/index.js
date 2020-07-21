import React, { Component } from 'react';

import './index.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };
  }

  handleChangeContent = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { onCreateTodo } = this.props;
    const { content } = this.state;

    onCreateTodo(content);
    this.clearContent();
  };

  clearContent = () => {
    this.setState({
      content: '',
    });
  };

  render() {
    const { content } = this.state;

    return (
      <div className='todo-form-container'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='What need to be done?'
            onChange={this.handleChangeContent}
            value={content}
          />
        </form>
      </div>
    );
  }
}

export default TodoForm;
