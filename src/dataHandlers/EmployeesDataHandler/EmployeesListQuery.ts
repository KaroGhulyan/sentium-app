import httpRequest from '../../services/httpRequest'
import { RequestTypes } from '../../services/httpRequest/interfaces'
import { useQuery } from '@tanstack/react-query'
import { EMPLOYEES_API, QUERY_KEYS } from '../../config/apiConfig'
import { UserType } from '../interfaces'

export const EmployeesListQuery = () => {
  const fetchData = (url: string) => async () => {
    const { data } = await httpRequest({
      url: url,
      method: RequestTypes.Get,
    })
    return data
  }
  return useQuery<UserType[],Error>([QUERY_KEYS.EMPLOYEES], fetchData(EMPLOYEES_API.DEFAULT))
}
