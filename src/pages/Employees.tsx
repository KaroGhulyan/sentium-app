import { StackedColumn } from '../components/shared/charts'
import { Col, Row } from 'antd'
import { UserIcon } from '../assets/styles/shared'
import { SimpleCard } from '../components/shared/cards'
import { EmployeesListQuery } from '../dataHandlers/EmployeesDataHandler'
import { ChartsWrapper } from '../components/init'
import { SimpleSelect } from '../components/shared/selects'
import { PeriodsList, MonthTypes } from '../config/chartsFilterConfig'
import UseProfitAndLossChartFilter from '../hooks/UseProfitAndLossChartFilter'
export const Employees = () => {
  const { data, isSuccess } = EmployeesListQuery()
  const { chartData, handleSelectChange } = UseProfitAndLossChartFilter()

  return (
    <>
      {isSuccess && (
        <Row gutter={16}>
          {data.map((employee) => (
            <Col className='gutter-row' span={6} key={employee.id}>
              <SimpleCard
                title={employee.fullname}
                description={employee.role}
                icon={<UserIcon />}
              />
            </Col>
          ))}
        </Row>
      )}
      <ChartsWrapper>
        {chartData && (
          <>
            <h2>Profit and Loss</h2>
            <SimpleSelect
              options={PeriodsList}
              onChange={handleSelectChange}
              defaultValue={MonthTypes.All}
            />
            <StackedColumn data={chartData} />
          </>
        )}
      </ChartsWrapper>
    </>
  )
}
