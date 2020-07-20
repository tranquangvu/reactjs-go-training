/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import './index.css';

class TodoFooter extends Component {
  render() {
    const { incompletedCount, activeFilter, onChangeFilter, onClearComplete } = this.props;

    return (
      <div className='todo-footer-container'>
        <div className='todo-left-count'>{incompletedCount} items left</div>
        <div className='todo-menus'>
          <a
            href='#'
            className={activeFilter === 'all' ? 'active' : null}
            onClick={() => onChangeFilter('all')}
          >
            All
          </a>
          <a
            href='#'
            className={activeFilter === 'active' ? 'active' : null}
            onClick={() => onChangeFilter('active')}
          >
            Active
          </a>
          <a
            href='#'
            className={activeFilter === 'completed' ? 'completed' : null}
            onClick={() => onChangeFilter('complete')}
          >
            Complete
          </a>
        </div>
        <a
          href='#'
          className='todo-clear-complete'
          onClick={onClearComplete}
        >
          Clear complete
        </a>
      </div>
    );
  }
}

export default TodoFooter;
