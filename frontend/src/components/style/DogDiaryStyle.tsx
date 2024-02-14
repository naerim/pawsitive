import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  height: 175px;
  border-radius: 9px;
  background: #ffe3cb;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 10px;
`
export const LinkDiv = styled(Link)`
  width: 100%;
`

export const BoneBowl = styled.img`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 12px;
  margin: 0 0 0 2px;
`

export const TitleContainer = styled.div`
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const SubTitle = styled.div`
  width: 90%;
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  color: black;
  margin: 10px 0 2px 7px;
`

export const Title = styled.div`
  width: 90%;
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  color: #ff9232;
  margin: 3px 0 0px 7px;
`
