import httpRequest from '../../services/httpRequest'
import { RequestTypes } from '../../services/httpRequest/interfaces'
import { useQuery } from '@tanstack/react-query'
import { PROJECTS_API, QUERY_KEYS } from '../../config/apiConfig'
import { ProjectType } from '../interfaces'

export const ProjectsListQuery = () => {
  const fetchData = (url: string) => async () => {
    const { data } = await httpRequest({
      url: url,
      method: RequestTypes.Get,
    })
    return data
  }
  return useQuery<ProjectType[], Error>([QUERY_KEYS.PROJECTS], fetchData(PROJECTS_API.DEFAULT))
}
