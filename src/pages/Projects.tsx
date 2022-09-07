import { ProjectsListQuery } from '../dataHandlers/ProjectsDataHandler'
import { ProjectsProfitDataQuery } from '../dataHandlers/ChartsDataHandler'
import { Col, Row } from 'antd'
import { SimpleCard } from '../components/shared/cards'
import { ProjectIcon } from '../assets/styles/shared'
import { ChartsWrapper } from '../components/init'
import { BasicPie } from '../components/shared/charts'

export const Projects = () => {
  const { data, isSuccess } = ProjectsListQuery()
  const { data: chartData } = ProjectsProfitDataQuery()

  return (
    <>
      {
        isSuccess && (
          <Row gutter={16}>
            {data.map((project) => (
              <Col className='gutter-row' span={6} key={project.id}>
                <SimpleCard title={project.name} description={project.country}  icon={<ProjectIcon />} />
              </Col>
            ))}
          </Row>

        )
      }
      <ChartsWrapper>
        {chartData && (
          <>
            <h2>Projects Profit</h2>
             <BasicPie data={chartData} />
          </>
        )}
      </ChartsWrapper>
    </>
  )

}
