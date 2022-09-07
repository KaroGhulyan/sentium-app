import React from 'react'
import { DualAxes } from '@ant-design/plots'
import { ProfitAndLossItemType } from '../../../interfaces/interfaces'

interface DualLineInterface {
  data: ProfitAndLossItemType[]
}
export const DualLine: React.FC<DualLineInterface> = ({ data }) => {
  const config = {
    data: [data, data],
    xField: 'month',
    yField: ['profit', 'loss'],
    geometryOptions: [
      {
        geometry: 'line',
        color: 'red',
      },
      {
        geometry: 'line',
        color: '#5AD8A6',
      },
    ],
  }
  return <DualAxes {...config} />
}
