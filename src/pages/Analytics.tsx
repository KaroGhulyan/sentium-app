import { BasicColumnPlot, BasicPie, StackedColumn } from '../components/shared/charts'
import { Col, Row } from 'antd'

export const Analytics = () => {
  return (
    <Row gutter={[48, 48]}>
      <Col xs={24} xl={8} span={6}>
        <BasicColumnPlot />
      </Col>
      <Col xs={24} xl={8}>
        <StackedColumn />
      </Col>
      <Col xs={24} xl={8}>
        <BasicPie />
      </Col>
    </Row>
  )
}
