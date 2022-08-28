import React, { useContext } from 'react'
import 'antd/dist/antd.css'
import { UploadOutlined, AreaChartOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { SiderMenu, SiderNav } from '../../assets/styles/components/layouts'
import { Switch } from 'antd'
import { UIConfigContext } from '../../store/context/UIConfigProvider'
import { UIConfigActionTypes } from '../../store/context/actions'
import { THEMES_TYPE } from '../../config/UIConfig'


interface AppSiderInterface {
  collapsed: boolean
}

const NavItems = [
  {
    key: '1',
    icon: <AreaChartOutlined height={'10em'}/>,
    label: 'nav 1',
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    label: 'nav 2',
  },
  {
    key: '3',
    icon: <UploadOutlined />,
    label: 'nav 3',
  },
]
const AppSider: React.FC<AppSiderInterface> = ({ collapsed }) => {
  const { dispatchUIConfigState } = useContext(UIConfigContext)

  const onChange = (checked: boolean) => {
    dispatchUIConfigState({
      type: UIConfigActionTypes.SetTheme,
      payload: !checked ? THEMES_TYPE.Light : THEMES_TYPE.Dark
    })
  };

  return (
    <SiderNav trigger={null} collapsible collapsed={collapsed}>
      <div className={'logo'}>
        <Switch onChange={onChange} />
      </div>
      <SiderMenu
        mode='inline'
        defaultSelectedKeys={['1']}
        items={NavItems}
      />
    </SiderNav>
  )
}

export default AppSider
