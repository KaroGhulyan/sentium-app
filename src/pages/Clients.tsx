import { ClientsListQuery } from '../dataHandlers/ClientsDataHandler'
import { Col, Row } from 'antd'
import { SimpleCard } from '../components/shared/cards'
import { ClientIcon } from '../assets/styles/shared'
import { ClientsProfitDataQuery } from '../dataHandlers/ChartsDataHandler'
import { ChartsWrapper } from '../components/init'
import { BasicBar } from '../components/shared/charts'

export const Clients = () => {
  const { data, isSuccess } = ClientsListQuery()
  const { data: chartData } = ClientsProfitDataQuery()
  return (
    <>
      {isSuccess && (
        <Row gutter={16}>
          {data.map((client) => (
            <Col className='gutter-row' span={6} key={client.id}>
              <SimpleCard title={client.name} description={client.country} icon={<ClientIcon />} />
            </Col>
          ))}
        </Row>
      )}
      <ChartsWrapper>
        {chartData && (
          <>
            <h2>Projects Profit</h2>
            <BasicBar data={chartData} />
          </>
        )}
      </ChartsWrapper>
    </>
  )
}
