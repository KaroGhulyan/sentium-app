import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import httpRequest from '../../services/httpRequest'
import { ChartsFilterParams, RequestTypes } from '../../services/httpRequest/interfaces'
import { PROFITANDLOSS_API } from '../../config/apiConfig'
import { ProfitAndLossItemType } from '../../interfaces/interfaces'

export interface ProfitAndLossChartDataQueryInterface {
  profitAndLoss: ProfitAndLossItemType[]
  setChartListParams: (id: ChartsFilterParams) => void
}

export const ProfitChartDataQuery = (): ProfitAndLossChartDataQueryInterface => {
  const [profitAndLoss, setProfitAndLoss] = useState<ProfitAndLossItemType[]>([])
  const [chartListParams, setChartListParams] = useState<ChartsFilterParams>(null)

  const profitAndLossChartQuery =
    (useQuery<ProfitAndLossItemType[]>([`period${chartListParams}`, chartListParams], async () => {
      const { data } = await httpRequest({
        url: PROFITANDLOSS_API.DEFAULT,
        method: RequestTypes.Get,
        params: chartListParams?.month ? chartListParams : null,
      })
      return data
    }).data as ProfitAndLossItemType[]) || null

  useEffect(() => {
    if (profitAndLossChartQuery?.length) {
      setProfitAndLoss(profitAndLossChartQuery || [])
    }
  }, [profitAndLossChartQuery])

  return {
    profitAndLoss,
    setChartListParams,
  }
}
