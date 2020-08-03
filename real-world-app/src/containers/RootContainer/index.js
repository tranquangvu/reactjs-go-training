import React, { Component } from 'react';
import { connect } from 'react-redux';

import Routes from '../../routes';

import 'antd/dist/antd.css';

class RootContainer extends Component {
  render() {
    const { authenticated } = this.props;

    return (
      <div className='root-container'>
        <Routes authenticated={authenticated} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  authenticated: auth.authenticated,
});

export default connect(mapStateToProps)(RootContainer);
