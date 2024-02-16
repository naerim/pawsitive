import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: auto;
  aspect-ratio: 1.6 / 1;
  background-color: #fd9132;
  color: white;
`
export const word = styled.div`
  padding: 20px;
`
export const Role = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
`
export const Name = styled.div`
  font-weight: 500;
  font-size: 20px;
`

export const Img = styled.img`
  align-self: flex-end;
  width: 223px;
  margin-right: -25px;
`

export const Body = styled.div``

export const MenuItemDiv = styled.div`
  margin: 30px 25px 30px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const MenuItem = styled(Link)`
  width: 100%;
  font-size: 15px;
  color: black;
`
export const RightArrow = styled.img`
  width: 15px;
`
