import httpRequest from '../../services/httpRequest'
import { RequestTypes } from '../../services/httpRequest/interfaces'
import { useQuery } from '@tanstack/react-query'
import { CLIENTSPROFIT_API, QUERY_KEYS } from '../../config/apiConfig'
import { ClientProfitType } from '../../interfaces/interfaces'

export const ClientsProfitDataQuery = () => {
  const fetchData = (url: string) => async () => {
    const { data } = await httpRequest({
      url: url,
      method: RequestTypes.Get,
    })
    return data
  }
  return useQuery<ClientProfitType[], Error>([QUERY_KEYS.CLIENTSPROFIT], fetchData(CLIENTSPROFIT_API.DEFAULT))
}
