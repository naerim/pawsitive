import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width: 390px;
  height: 60px;
  z-index: 100;
  background-color: #fff;
`

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`

export const Logo = styled.div`
  color: #ff9232;
  font-weight: 600;
  font-size: 1.2em;
`

export const MenuItem = styled(Link)`
  margin-left: 10px;
  color: #000;

  img {
    width: 27px;
    height: 27px;
  }
`
