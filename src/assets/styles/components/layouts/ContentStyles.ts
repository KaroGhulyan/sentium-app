import styled from 'styled-components'
import { Layout } from 'antd'

const {Content,Header} = Layout

export const MainLayout = styled(Layout)`
  background-color: rgb(255, 255, 255);
  border-radius: 60px;
  border: 15px solid rgba(255, 255, 255, 0.37);
  background-clip: padding-box;
  height: 90vh;
  overflow: auto;
`

export const AppContent = styled(Content)`
  padding: 24px;
  min-height: 280px;
  background: #fff;
`

export const AppHeaderLayout = styled(Header)`
  background: #fff;
  padding: 0;
`