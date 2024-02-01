import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin: 20px 0;
`

export const Item = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  font-size: 0.9em;
  padding: 6px 8px;
  border-radius: 28px;
  margin-right: 6px;
  border: 1px solid #eaeaea;
  img {
    width: 12px;
    height: 12px;
  }
  span {
    font-weight: 500;
    margin-left: 4px;
  }
`
