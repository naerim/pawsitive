import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
`

export const DogListContainer = styled.div`
  width: 90%;
  margin: 0 auto 70px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(48%, 1fr));
  gap: 3px;
  padding: 3px 0;
  height: fit-content;
`

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0 25px 15px;
`

export const Header = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin: 45px 0 0 10px;
`

export const BackButton = styled.div`
  background-color: white;
  border: none;
  margin: 10px 0 0 0;
  cursor: pointer;

  img {
    width: 10px;
  }
`
