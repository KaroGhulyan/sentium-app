import { Layout } from 'antd'
import React, { ReactNode, useState } from 'react'
import { Content } from 'antd/es/layout/layout'
import AppHeader from './AppHeader'
import AppSider from './AppSider'

interface MainInterface {
  children: ReactNode
}
export const Main:React.FC<MainInterface> = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{height:'100vh'}}>
      <AppSider collapsed={collapsed}/>
      <Layout className="site-layout">
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed}/>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280
          }}
        >
          {children}
        </Content>
      </Layout>

    </Layout>

    )
}