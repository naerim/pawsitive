import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`

export const Logo = styled.div`
  color: #000;
`

export const MenuItem = styled(Link)`
  margin-right: 10px;
`
