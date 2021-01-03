import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Header } from './Header';
import { pathPrefix } from '../gatsby-config';
import { Layout } from 'antd';
import { Sidebar } from './sidebar/index';
import { TableOfContents } from './TableOfContents';

import 'antd/lib/style/themes/default.less';
import './assets/css/style.scss';
import styleContent from './assets/css/contents/contents.module.scss';
const { Sider, Content } = Layout;

export function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
          allMdx {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const allPosts = data.allMdx.edges.map(
          (edge: any) => edge.node.fields.slug
        );
        let onPostPage;
        if (typeof window !== 'undefined') {
          const path = window.location.pathname.replace(
            pathPrefix.slice(0, -1),
            ''
          );
          if (
            allPosts.indexOf(path) >= 0 ||
            allPosts.indexOf(path.slice(0, -1)) >= 0
          ) {
            onPostPage = true;
          } else {
            onPostPage = false;
          }
        }

        const { title } = data.site.siteMetadata;

        return (
          <div
            style={{
              width: '100%',
              height: '100%',
              padding: 0,
              overflow: 'hidden',
            }}
          >
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Header siteTitle={title} />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                height: '100%',
              }}
            >
              <Sidebar />
              <Layout style={{ height: '100%' }}>
                <Content
                  className={styleContent}
                  style={{
                    background: '#FFF',
                    padding: 32,
                    margin: 0,
                    minHeight: 'calc(100vh - 49px)',
                  }}
                >
                  {children}
                </Content>
              </Layout>
            </div>
          </div>
        );
      }}
    />
  );
}

export default RootLayout;
