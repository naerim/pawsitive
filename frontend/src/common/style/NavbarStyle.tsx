import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.nav`
  position: fixed;
  width: 392px;
  bottom: 0;
  z-index: 100;
  border-top: 1px solid #f7f7f7;
  background-color: #fff;
`

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 89px;
`

export const MenuItem = styled(Link)`
  font-size: 10px;
  color: #000;
  margin-right: 10px;
`
