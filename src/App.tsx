import React, { FC } from 'react';
import { BrowserRouter } from "react-router-dom";
import { } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import en_US from 'antd/lib/locale/en_US';
import News from './pages/News';
import SiderMenu from './components/sideMenu';
const { Sider, Content } = Layout;

const App: FC = (props) => {

  return (

    <BrowserRouter>
      <ConfigProvider locale={en_US}>
        <Layout>
          <Sider style={{ background: "white" }}>
            <SiderMenu />
          </Sider>
          <Content>
            <News />
          </Content>
        </Layout>
      </ConfigProvider>
    </BrowserRouter>

  )
};

export default App;