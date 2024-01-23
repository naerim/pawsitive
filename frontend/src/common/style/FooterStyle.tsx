import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  position: fixed;
  width: 400px;
  bottom: 0;
`

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
`

export const MenuItem = styled(Link)`
  margin-right: 10px;
`
