import React from 'react'
import { UserCard } from '../../../assets/styles/shared'

interface SimpleCardInterface {
  title: string
  description?: string
  icon: React.ReactNode
}

export const SimpleCard: React.FC<SimpleCardInterface> = ({ title, description, icon }) => {
  return (
    <UserCard bordered hoverable size={'small'}>
      <div className={'card-title'}>
        <h3>{title}</h3>
        {description && <small>{description}</small>}
      </div>
      {icon}
    </UserCard>
  )
}
