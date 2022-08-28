import { Layout } from 'antd'
import React, { ReactNode, useState } from 'react'
import { Content } from 'antd/es/layout/layout'
import AppHeader from './AppHeader'
import AppSider from './AppSider'
import { MainLayout } from '../../assets/styles/components/layouts'

interface MainInterface {
  children: ReactNode
}
export const Main:React.FC<MainInterface> = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <MainLayout>
      <AppSider collapsed={collapsed}/>
      <Layout className="site-layout">
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed}/>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 280
          }}
        >
          {children}
        </Content>
      </Layout>

    </MainLayout>

    )
}