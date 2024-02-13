import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 200px;
  min-width: 200px;
  height: 135px;
  display: flex;
  background-color: white;
  padding: 7px;
  border-radius: 10px;
  margin: 0 10px;
  color: black;
`

export const CardLink = styled(Link)``

export const ImgContainer = styled.div`
  width: 55%;
`

export const DogImage = styled.img`
  width: 100px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
`

export const TextInfoContainer = styled.div`
  width: 40%;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 7px 7px 3px 7px;
`

export const DogName = styled.div`
  text-align: right;
  font-size: 15px;
  font-weight: 700;
`

export const MoreDogInfo = styled.div`
  font-size: 10px;
  color: #818181;
  line-height: 15px;
  height: fit-content;
`
