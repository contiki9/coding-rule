import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Menu, Row, Col } from 'antd';
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';

interface Props {
  siteTitle: string;
}

export class Header extends Component<Props> {
  render() {
    const { siteTitle } = this.props;
    return (
      <>
        <Row
          justify="center"
          align="middle"
          style={{
            paddingLeft: 16,
            paddingRight: 16,
            borderBottom: '1px solid #f0f0f0',
          }}
        >
          <Col>
            <p style={{ fontSize: 16, marginBottom: 0 }}>
              <Link style={{ color: '#333' }} to="/">
                {siteTitle}
              </Link>
            </p>
          </Col>
          <Col style={{ marginLeft: 'auto' }}>
            <Menu mode="horizontal">
              <Menu.Item>
                <a
                  href="https://github.com/jannikbuschke/gatsby-antd-docs"
                  target="_blank"
                >
                  <GithubOutlined />
                  GitHub
                </a>
              </Menu.Item>
              <Menu.Item>
                <a href="https://twitter.com/jannikbuschke" target="_blank">
                  <TwitterOutlined />
                  Twitter
                </a>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </>
    );
  }
}
