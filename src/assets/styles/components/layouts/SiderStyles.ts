import styled from 'styled-components';
import { Layout, Menu } from 'antd'
const { Sider: SiderStyles } = Layout

export const SiderNav = styled(SiderStyles)`
  background-color: ${(props) => props.theme.colors.appMainColor};
`

export const SiderMenu = styled(Menu)`
   background-color: transparent;
   box-shadow: 0 20px 27px rgb(0 0 0/5%);
   font-weight: 600;
   border-top: 1px solid #f5f5f5;
   padding-top: 40px;
`
