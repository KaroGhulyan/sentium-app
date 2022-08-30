import React, { useContext } from 'react'
import {
  BarChartOutlined,
  AreaChartOutlined,
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
    key: 'analytics',
    icon: <AreaChartOutlined />,
    label: 'Analytics',
    link: '/',
  },
  {
    key: 'briefings',
    icon: <PieChartOutlined />,
    label: 'Briefings',
    link: '/briefings',
  },
  {
    key: 'contracts',
    icon: <LineChartOutlined />,
    label: 'Contracts',
    link: '/contracts',
  },
  {
    key: 'growth',
    icon: <BarChartOutlined />,
    label: 'Growth',
    link: '/growth',
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
        defaultSelectedKeys={['analytics']}
        items={NavItems}
        onClick={(e) => navigate(e.key)}
      />
    </SiderNav>
  )
}

export default AppSider
