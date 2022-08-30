import styled from 'styled-components';
import { Layout, Menu } from 'antd'
const { Sider } = Layout

export const SiderNav = styled(Sider)`
  background-color: ${(props) => props.theme.colors.appMainColor};
`

export const SiderMenu = styled(Menu)`
   background-color: transparent;
   box-shadow: 0 20px 27px rgb(0 0 0/5%);
   font-weight: 600;
   padding-top: 40px;
`
export const MenuItem = styled(Menu.Item)`
   //background-color: transparent;
   //box-shadow: 0 20px 27px rgb(0 0 0/5%);
   //font-weight: 600;
   //padding-top: 40px;
`

export const SiderHeader = styled.div`
  background: transparent;
  padding: 20px;
`
