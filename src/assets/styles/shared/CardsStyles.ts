import styled from 'styled-components'
import { Card } from 'antd'


export const UserCard = styled(Card)`
  border-radius: 10px;
  padding: 5px;
  .ant-card-body{
    border-radius: 10px;
    background-color: inherit;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .card-title {
    margin-right: 30px;
    h3 {
      font-size: 1.3em;
      font-weight: 700;
    }
    small {
      color: lightslategrey;
    }
  }
`

