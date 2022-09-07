
export interface DefaultOptionInterface {
  name: string,
  id: number | string,
  type?: string,
  text?: string,
}

export type ProfitAndLossItemType= {
  month: string,
  name: string,
  value: number
}

export type ProjectProfitType= {
  type: string,
  value: number
}
export type ClientProfitType= {
  name: string,
  value: number
}