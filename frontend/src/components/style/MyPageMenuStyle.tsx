import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`

export const MenuItem = styled(Link)`
  margin-bottom: 20px;
`
