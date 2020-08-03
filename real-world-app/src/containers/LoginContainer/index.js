import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Form, Input, Button, Typography } from 'antd';

import ErrorMessage from '../../components/ErrorMessage';

import { login } from '../../actions/authActions';
import { clearError } from '../../actions/errorActions';

import './index.scss';

const { Title } = Typography;

class LoginContainer extends Component {
  onFinish = (values) => {
    const { login } = this.props;

    login({ user: values });
  };

  componentWillUnmount() {
    this.props.clearError('login');
  }

  render() {
    const { loading, authenticated, errors } = this.props;

    if (authenticated) {
      return (
        <Redirect to='/' />
      );
    }

    return (
      <div className='login-container'>
        <Title level={2}>Login</Title>
        <ErrorMessage
          errors={errors}
        />
        <Form
          name='login-form'
          layout='vertical'
          onFinish={this.onFinish}
          colon={false}
          hideRequiredMark
        >
          <Form.Item
            name='email'
            rules={[
              { type: 'email', message: 'Email is not valid' },
              { required: true, message: 'Email is required' },
            ]}
            hasFeedback
          >
            <Input placeholder='Email' />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Password is required' }]}
            hasFeedback
          >
            <Input.Password placeholder='Password' />
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              loading={loading}
              block
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, error }) => {
  return {
    loading: auth.loading,
    authenticated: auth.authenticated,
    errors: error.login,
  };
};

export default connect(mapStateToProps, {
  login,
  clearError,
})(LoginContainer);
