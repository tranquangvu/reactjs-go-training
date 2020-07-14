/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import './index.css';

class TodoFooter extends Component {
  render() {
    return (
      <div class='todo-footer-container'>
        <div class='todo-left-count'>
          2 items left
        </div>
        <div class='todo-menus'>
          <a href='#' class='active'>All</a>
          <a href='#'>Active</a>
          <a href='#'>Complete</a>
        </div>
        <a href='#' className='todo-clear-complete'>
          Clear complete
        </a>
      </div>
    );
  }
}

export default TodoFooter;
