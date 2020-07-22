import React, { Component } from 'react';
import { Provider } from 'react-redux';

import TodosContainer from './containers/TodosContainer';

import configureStore from './store/configureStore';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <TodosContainer />
      </Provider>
    );
  }
}

export default App;
