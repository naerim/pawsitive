import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  width: 100%;
  margin-bottom: 20px;
  padding: 20px 0;
`

export const Wrap = styled.div`
  margin-left: 5%;
  overflow-x: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Title = styled.div`
  color: #000;
  font-size: 1em;
  font-weight: 500;
  margin-left: 5%;
  margin-bottom: 20px;
`

export const CardList = styled.div`
  display: flex;
`
