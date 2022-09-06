import React from 'react'
import { ChartRowWrapper } from '../../assets/styles/components/init'
import { Col } from 'antd'

interface ChartsWrapperInterface {
  children: React.ReactNode
}
export const ChartsWrapper: React.FC<ChartsWrapperInterface> = ({ children }) => {
  return (
    <ChartRowWrapper>
      <Col span={24}>{children}</Col>
    </ChartRowWrapper>
  )
}
