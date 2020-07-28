import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../store/configureStore';

const store = configureStore();

class RootContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>Home</h1>
      </Provider>
    );
  }
}

export default RootContainer;
