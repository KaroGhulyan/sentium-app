import React from 'react';
import { Pie } from '@ant-design/plots';
import { PieConfig } from '@ant-design/charts'
import { ProjectProfitType } from '../../../interfaces/interfaces'
interface BasicPieInterface {
  data: ProjectProfitType[]
}
export const BasicPie:React.FC<BasicPieInterface> = ({ data }) => {

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  } as PieConfig;
  return <Pie {...config} />;
};

