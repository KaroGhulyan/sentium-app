import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Header } from 'antd/es/layout/layout'

interface HeaderInterface {
  collapsed: boolean
  setCollapsed: (value: boolean) => void
}
const AppHeader: React.FC<HeaderInterface> = ({ setCollapsed, collapsed }) => {
  return (
    <Header
      className='site-layout-background'
      style={{
        padding: 0,
      }}
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}
    </Header>
  )
}

export default AppHeader
