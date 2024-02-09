import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff3e9;
  padding: 21px 29px;
  margin: 20px 0;
  cursor: pointer;

  img {
    width: 7px;
    height: 13px;
  }
`

export const Card = styled(Link)``
export const Bold = styled.div`
  color: #ff9232;
  font-weight: 600;
`

export const Title = styled.div`
  color: #ff9232;
  font-weight: 500;
  margin-top: 6px;
`
