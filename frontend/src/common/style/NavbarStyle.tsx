import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.nav`
  position: fixed;
  width: 390px;
  bottom: 0;
  z-index: 100;
  border-top: 1px solid #f7f7f7;
  background-color: #fff;
`

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  height: 69px;
`

export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #000;
  width: 16%;
`

export const Image = styled.img`
  width: 20px;
  height: 20px;
`

export const Label = styled.div`
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: 500;
`
