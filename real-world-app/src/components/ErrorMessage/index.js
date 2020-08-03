import React, { Component, Fragment } from 'react';
import { Alert } from 'antd';

import { capitalize } from '../../utils/stringUtils';

import './index.scss';

class ErrorMessage extends Component {
  renderDescription(errors) {
    return (
      <Fragment>
        {Object.entries(errors)
          .map(([key, value]) => `${capitalize(key)} ${value[0]}`)
          .map((error) => (
            <Fragment key={error}>
              {error}
              <br />
            </Fragment>
          ))}
      </Fragment>
    );
  }

  render() {
    const { errors } = this.props;

    if (!errors) {
      return null;
    }

    return (
      <div className='error-message-container'>
        <Alert description={this.renderDescription(errors)} message='Error' type='error' showIcon />
      </div>
    );
  }
}

export default ErrorMessage;
