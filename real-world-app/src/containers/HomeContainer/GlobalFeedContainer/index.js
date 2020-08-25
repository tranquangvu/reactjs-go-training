import React, { Component, Fragment } from 'react';
import { List, Avatar, Space, Tag, Button } from 'antd';
import { HeartOutlined, SmileOutlined } from '@ant-design/icons';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

class GlobalFeedContainer extends Component {
  componentDidMount() {
    debugger;
  }

  render() {
    return (
      <div className='global-feed-container'>
        <List
          className='article-list'
          itemLayout='vertical'
          size='large'
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 10,
          }}
          dataSource={listData}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                <Button icon={<HeartOutlined />} type='link' size='small'>16</Button>,
                <Button icon={<SmileOutlined />} type='link' size='small'>Read more...</Button>,
              ]}
              extra={
                <Fragment>
                  <Tag color='blue'>Ruby</Tag>
                  <Tag color='blue'>ReactJS</Tag>
                  <Tag color='blue'>Elixir</Tag>
                </Fragment>
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default GlobalFeedContainer;
