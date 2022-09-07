import { Layout } from 'antd'
import React, { ReactNode, useState } from 'react'
import AppHeader from './AppHeader'
import AppSider from './AppSider'
import { AppContent, MainLayout } from '../../assets/styles/components/layouts'

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
        <AppContent>
          {children}
        </AppContent>
      </Layout>

    </MainLayout>

    )
}