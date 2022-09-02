import { BasicColumnPlot, BasicPie, StackedColumn } from '../components/shared/charts'
import { Card, Col, Row } from 'antd'
import Meta from 'antd/es/card/Meta'
import { UserCard, UserIcon } from '../assets/styles/shared'
import { SimpleCard } from '../components/shared/cards'
export const Analytics = () => {
  return (
    <>
      <Row gutter={[48, 48]}>
        <SimpleCard title={'Karo Ghulyan'} description={'React JS Developer'} icon={<UserIcon/>}/>
      </Row>
      <Row gutter={[48, 48]}>
        <Col xs={24} xl={8}>
          <BasicColumnPlot />
        </Col>
        {/* <Col xs={24} xl={8}>*/}
        {/*  <StackedColumn />*/}
        {/* </Col>*/}
        {/* <Col xs={24} xl={8}>*/}
        {/*  <BasicPie />*/}
        {/* </Col>*/}
      </Row>
    </>
  )
}
