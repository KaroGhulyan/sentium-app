import httpRequest from '../../services/httpRequest'
import { RequestTypes } from '../../services/httpRequest/interfaces'
import { useQuery } from '@tanstack/react-query'
import { PROJECTSPROFIT_API, QUERY_KEYS } from '../../config/apiConfig'
import { ProjectProfitType } from '../../interfaces/interfaces'

export const ProjectsProfitDataQuery = () => {
  const fetchData = (url: string) => async () => {
    const { data } = await httpRequest({
      url: url,
      method: RequestTypes.Get,
    })
    return data
  }
  return useQuery<ProjectProfitType[], Error>([QUERY_KEYS.PROJECTSPROFIT], fetchData(PROJECTSPROFIT_API.DEFAULT))
}
