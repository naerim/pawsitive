import styled from 'styled-components'

export const Container = styled.div`
  width: 200px;
  min-width: 200px;
  display: flex;
  background-color: white;
  padding: 3%;
  border-radius: 10px;
  margin: 0 10px;
`
export const ImgContainer = styled.div`
  width: 60%;
`

export const DogImage = styled.img`
  width: 100%;
`

export const TextInfoContainer = styled.div`
  width: 40%;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 5%;
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
