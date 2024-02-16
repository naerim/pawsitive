import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 250px;
  height: 120px;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  margin-right: 20px;
  color: black;
  background-color: #fff;
`

export const CardLink = styled(Link)``

export const ImgContainer = styled.div`
  width: 45%;
  height: 100%;
`

export const DogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`

export const TextInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: auto;

  span {
    padding: 4px;
    font-size: 0.9em;
    color: #ff9232;
    font-weight: 500;
  }
`

export const DogInfoWrap = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-end;
`

export const DogName = styled.div`
  display: flex;
  font-size: 1em;
  font-weight: 600;
  margin-bottom: 4px;
`

export const DogInfo = styled.div`
  color: #7b7b7b;
  font-size: 0.8em;
  line-height: 1.1;
`

export const MoreDogInfo = styled.div`
  font-size: 10px;
  color: #818181;
  line-height: 15px;
`
