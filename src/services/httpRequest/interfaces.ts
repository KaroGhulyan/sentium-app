import { CancelToken, Method } from 'axios'
import { MonthTypes } from '../../config/chartsFilterConfig'

export enum RequestTypes {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
  Patch = 'PATCH',
}

export type GetDefaultParamsType = {
  limit?: string
} | null

export type ChartsFilterParams = GetDefaultParamsType & {
  type?: string,
  month: MonthTypes | string,
} | null

export type HTTPRequestParamsTypes = ChartsFilterParams | null

export type ResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'

export enum HttpRequestHeaderTypes {
  Json = 'JSON',
  MultiPart = 'MultiPart',
}

export interface HttpRequestProps<D, P> {
  url: string
  data?: D
  params?: P
  method: string
  withoutToken?: boolean
  headerType?: HttpRequestHeaderTypes
  responseType?: ResponseType
}

export interface RequestHeaderProps {
  headerType?: HttpRequestHeaderTypes
  withoutToken?: boolean
}

export interface HttpRequestProps<D, P> {
  url: string
  data?: D
  params?: P
  method: Method | string
  withoutToken?: boolean
  cancelToken?: CancelToken
  headerType?: HttpRequestHeaderTypes
  responseType?: ResponseType
}


export type HTTPRequestDataTypes = File | FormData | null
