import { Select } from 'antd'
import { Option } from 'antd/es/mentions'
import { DefaultOptionInterface } from '../../../interfaces/interfaces'
import React from 'react'
import { SelectWrapper } from '../../../assets/styles/components/init'

interface SimpleSelectInterface {
  options: DefaultOptionInterface[]
  onChange: (value: string) => void,
  defaultValue?: string
}
export const SimpleSelect: React.FC<SimpleSelectInterface> = ({ options, onChange,defaultValue }) => {
  return (
    <SelectWrapper>
      <Select defaultValue={defaultValue}style={{ width: 120 }} onChange={onChange}>
        {options.map((option) => (
          <Option key={option.id as string} value={option.id as string}>
            {option.name}
          </Option>
        ))}
      </Select>
    </SelectWrapper>
  )
}
