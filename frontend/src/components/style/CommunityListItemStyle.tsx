import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 6px;
  img {
    width: 70px;
    height: 70px;
    background-color: #fff3e9;
    padding: 6px;
    border-radius: 6px;
  }
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const Category = styled.div`
  color: #ff9232;
  font-weight: 500;
  font-size: 0.7em;
`

export const Title = styled.div`
  color: #000;
  font-size: 1.1em;
  line-height: 1.5;
  margin: 2px 0;
`

export const Desc = styled.div`
  color: #7b7b7b;
  font-size: 0.9em;
`
