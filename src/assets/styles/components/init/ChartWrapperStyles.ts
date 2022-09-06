import styled from 'styled-components';
import { Row } from 'antd'

export const ChartRowWrapper = styled(Row)`
  padding: 20px 0;
  h2{
    font-size: 1.2em;
    font-weight: bold;
    color: ${(props) => props.theme.colors.appTextColor};
  }
`


