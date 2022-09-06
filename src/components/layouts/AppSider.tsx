import React, { useContext } from 'react'
import {
  BarChartOutlined,
  PieChartOutlined,
  LineChartOutlined,
} from '@ant-design/icons'
import { SiderHeader, SiderMenu, SiderNav } from '../../assets/styles/components/layouts'
import { Switch } from 'antd'
import { UIConfigContext } from '../../store/context/UIConfigProvider'
import { UIConfigActionTypes } from '../../store/context/actions'
import { THEMES_TYPE } from '../../config/UIConfig'
import { useNavigate } from 'react-router-dom'

interface AppSiderInterface {
  collapsed: boolean
}
const NavItems = [
  {
    key: 'employees',
    icon: <BarChartOutlined />,
    label: 'Employees',
    link: '/',
  },
  {
    key: 'projects',
    icon: <PieChartOutlined />,
    label: 'Projects',
    link: '/projects',
  },
  {
    key: 'contracts',
    icon: <LineChartOutlined />,
    label: 'Contracts',
    link: '/contracts',
  },
]
const AppSider: React.FC<AppSiderInterface> = ({ collapsed }) => {
  const { dispatchUIConfigState } = useContext(UIConfigContext)
  const navigate = useNavigate()

  const onChange = (checked: boolean) => {
    dispatchUIConfigState({
      type: UIConfigActionTypes.SetTheme,
      payload: !checked ? THEMES_TYPE.Light : THEMES_TYPE.Dark,
    })
  }

  return (
    <SiderNav trigger={null} collapsible collapsed={collapsed}>
      <SiderHeader>
        <Switch onChange={onChange} />
      </SiderHeader>
      <SiderMenu
        mode='inline'
        defaultSelectedKeys={['employees']}
        items={NavItems}
        onClick={(e) => navigate(e.key)}
      />
    </SiderNav>
  )
}

export default AppSider
