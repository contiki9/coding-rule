import React from 'react';
import { Button, Layout, Row, Col } from 'antd';
const { Content } = Layout;

export default function NotFound() {
  return (
    <Layout>
      <Content style={{ height: '100vh' }}>
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
          <Col>
            <h1>ごめんなさい。そのURLのページはありません。</h1>
            <Button href="/">TOPへ</Button>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
