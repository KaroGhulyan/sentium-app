import httpRequest from '../../services/httpRequest'
import { RequestTypes } from '../../services/httpRequest/interfaces'
import { useQuery } from '@tanstack/react-query'
import { CLIENTS_API, QUERY_KEYS } from '../../config/apiConfig'
import { ClientType } from '../interfaces'

export const ClientsListQuery = () => {
  const fetchData = (url: string) => async () => {
    const { data } = await httpRequest({
      url: url,
      method: RequestTypes.Get,
    })
    return data
  }
  return useQuery<ClientType[], Error>([QUERY_KEYS.CLIENTS], fetchData(CLIENTS_API.DEFAULT))
}
