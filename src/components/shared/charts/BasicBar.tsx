import React from 'react';
import { Bar } from '@ant-design/plots';
import { ColumnConfig } from '@ant-design/plots/es/components/column'
import { ClientProfitType } from '../../../interfaces/interfaces'
interface BasicBarInterface {
  data: ClientProfitType[]
}
export const BasicBar:React.FC<BasicBarInterface> = ({data}) => {

  const config = {
    data,
    xField: 'value',
    yField: 'name',
    seriesField: 'name',
    legend: {
      position: 'top-left',
    },
  } as ColumnConfig;
  return <Bar {...config} />;
};

