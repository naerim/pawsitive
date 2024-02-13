import styled from 'styled-components'

export const Container = styled.div`
  width: 390px;
  background-color: #fff3e9;
  padding: 3% 0;
  margin: 1% 0;
`

export const Title = styled.div`
  color: #ff9232;
  font-size: 15px;
  font-weight: 700;
  margin: 2%;
  padding-left: 3%;
`

export const CardList = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`
