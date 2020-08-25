import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { ReloadOutlined, PlusSquareOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';

import Routes from '../../routes';

import 'antd/dist/antd.css';
import './index.scss';

const { Header, Content, Footer } = Layout;

class RootContainer extends Component {
  render() {
    const { authenticated } = this.props;

    return (
      <div className='root-container'>
        <Router>
          <Layout className='layout'>
            <Header>
              <Menu theme='dark' mode='horizontal' selectable={false}>
                <Menu.Item key='home' icon={<ReloadOutlined />}>Home</Menu.Item>
                <Menu.Item key='newArticle' icon={<PlusSquareOutlined />}>New Article</Menu.Item>
                <Menu.Item key='setting' icon={<SettingOutlined />}>Setting</Menu.Item>
                <Menu.Item key='profile' icon={<UserOutlined />}>Profile</Menu.Item>
              </Menu>
            </Header>
            <Content>
              <Routes authenticated={authenticated} />
            </Content>
          </Layout>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  authenticated: auth.authenticated,
});

export default connect(mapStateToProps)(RootContainer);
