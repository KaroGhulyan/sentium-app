import { useEffect, useState } from 'react'
import { ProfitAndLossItemType } from '../interfaces/interfaces'
import { MonthTypes } from '../config/chartsFilterConfig'
import { ProfitChartDataQuery } from '../dataHandlers/ChartsDataHandler'

interface UseChartFilterInterface {
  handleSelectChange: (value: string) => void
  chartData: ProfitAndLossItemType[] | null
}

const UseProfitAndLossChartFilter = (): UseChartFilterInterface => {
  const { profitAndLoss, setChartListParams } = ProfitChartDataQuery()

  const [chartData, setChartData] = useState<ProfitAndLossItemType[] | null>(null)

  const handleSelectChange = (value: string) => {
    setChartListParams({ month: value === MonthTypes.All ? '' : value.toLowerCase() })
  }

  useEffect(() => {
    setChartData(profitAndLoss)
  }, [profitAndLoss])

  return {
    chartData,
    handleSelectChange,
  }
}

export default UseProfitAndLossChartFilter
