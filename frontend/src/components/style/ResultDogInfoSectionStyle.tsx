import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;

  .left {
    color: #878787;
  }

  .right {
    color: #000;
    font-weight: 500;
  }

  &:first-child {
    margin-bottom: 20px;
  }
`
