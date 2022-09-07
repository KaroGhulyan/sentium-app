import React  from 'react'
import { Column } from '@ant-design/plots'
import { ColumnConfig } from '@ant-design/plots/es/components/column'
import { ProfitAndLossItemType } from '../../../interfaces/interfaces'

interface StackedColumnInterface {
  data: ProfitAndLossItemType[]
}
export const StackedColumn:React.FC<StackedColumnInterface> = ({data}) => {


  const config = {
    height: 300,
    theme: {
      colors10: [
        '#1890ff',
        '#FF6B3B',
      ]
    },
    data,
    isStack: true,
    xField: 'month',
    yField: 'value',
    seriesField: 'name',
    label: {
      position: 'middle',
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
    },
  } as ColumnConfig

  return <Column {...config} />
}
