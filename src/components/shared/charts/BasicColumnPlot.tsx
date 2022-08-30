import { ColumnConfig } from '@ant-design/plots/es/components/column'
import { Column } from '@ant-design/plots'

export const BasicColumnPlot = () => {
  const data = [
    {
      type: 'jan',
      sales: 38,
    },
    {
      type: 'feb',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 48,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
      sales: 38,
    },
  ]

  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'profit',
      },
      sales: {
        alias: 'profit',
      },
    },
  } as ColumnConfig

  return <Column {...config} />
}