import React, { Component } from 'react';
import { Tabs } from 'antd';

import GlobalFeedContainer from './GlobalFeedContainer';
import YourFeedContainer from './YourFeedContainer';

import './index.scss';

const { TabPane } = Tabs;

class HomeContainer extends Component {
  render() {
    return (
      <div className='home-container'>
        <Tabs centered>
          <TabPane tab='Global Feed' key='1'>
            <GlobalFeedContainer />
          </TabPane>
          <TabPane tab='Your Feed' key='2'>
            <YourFeedContainer />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default HomeContainer;
