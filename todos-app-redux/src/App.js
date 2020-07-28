import React, { Component } from 'react';
import { Provider } from 'react-redux';

import TodosContainer from './containers/TodosContainer';

import configureStore from './store/configureStore';
import { saveTodosToLocalStorage } from './utils/todoUtils';

const store = configureStore();

store.subscribe(() => {
  const { todo } = store.getState();

  saveTodosToLocalStorage(todo.items);
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodosContainer />
      </Provider>
    );
  }
}

export default App;
